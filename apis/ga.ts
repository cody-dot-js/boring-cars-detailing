import { getCLS, getFID, getLCP, getTTFB, getFCP, Metric } from "web-vitals";

interface GAData {
  /**
   * Measurement Protocol Version
   */
  v: string;
  /**
   * Measurement/Tracking ID
   */
  tid: string;
  /**
   * Client ID
   */
  cid: string;
  /**
   * Document location
   */
  dl: string;
}

interface GA {
  data: GAData;
  send: (params: SendParams) => void;
}

interface GAOptions {
  measurementId: string;
  version?: string;
  location?: string;
  clientId?: string;
}

const makeGAData = (options: GAOptions): GAData => ({
  v: options.version ?? "1",
  tid: options.measurementId,
  cid: options.clientId ?? `${Date.now()}${Math.random()}`,
  dl: options.location ?? window.location.href,
});

export const makeGA = (options: GAOptions): GA => {
  const data = makeGAData(options);

  return {
    data,
    send: (params: SendParams) => {
      window.navigator.sendBeacon(
        "https://google-analytics.com/collect",
        new URLSearchParams({
          ...data,
          ...params,
        }).toString()
      );
    },
  };
};

type SendParams = Report & Partial<VitalsReport>;

type Report = {
  /**
   * Hit type
   */
  t: string;
};

type VitalsReport = Report & {
  /**
   * Event category
   */
  ec: string;
  /**
   * Event action
   */
  ea: string;
  /**
   * Event label
   */
  el: string;
  /**
   * Event value
   */
  ev: string;
  /**
   * Non-interaction
   */
  ni: string;
};

const makeVitalsReport = ({ name, delta, id }: Metric): VitalsReport => ({
  t: "event",
  ec: "Web Vitals",
  ea: name,
  el: id,
  // GA rounds to the nearest integer. All our metrics are in ms.
  // CLS is a score that is ideally somewhere below 1
  ev: Math.round(name === "CLS" ? delta * 1000 : delta).toString(),
  ni: "1",
});

export function runPageViewMetrics(ga: GA) {
  ga.send({ t: "pageview" });
  measureWebVitals(ga);
}

function measureWebVitals(ga: GA) {
  function reportHandler(metric: Metric) {
    const report = makeVitalsReport(metric);
    ga.send(report);
  }

  getCLS(reportHandler);
  getFID(reportHandler);
  getLCP(reportHandler);
  getTTFB(reportHandler);
  getFCP(reportHandler);
}

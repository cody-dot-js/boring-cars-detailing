import { getCLS, getFID, getLCP, getTTFB, getFCP, Metric } from "web-vitals";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: typeof gtag;
    __NEXT_DATA_CAP_: {
      ga: {
        id: string;
        enabled: boolean;
      };
    };
  }
}

export function gtag() {
  window.dataLayer.push(arguments);
}

export function pageView(url: URL | string) {
  window.gtag("config", window.__NEXT_DATA_CAP_.ga.id, {
    page_path: url,
  });
}

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function event({ action, category, label, value }: GTagEvent) {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

function reportHandler(metric: Metric) {
  event({
    action: metric.name,
    category: "performance",
    label: metric.name,
    value: metric.value,
  });
}

export function measureWebVitals() {
  getCLS(reportHandler);
  getFID(reportHandler);
  getLCP(reportHandler);
  getTTFB(reportHandler);
  getFCP(reportHandler);
}

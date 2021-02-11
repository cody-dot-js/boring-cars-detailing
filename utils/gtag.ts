import { getCLS, getFID, getLCP, getTTFB, getFCP, Metric } from "web-vitals";

interface GTagMeta {
  id: string;
  enabled: boolean;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: typeof gtag & Partial<GTagMeta>;
  }
}

export function gtag() {
  window.dataLayer.push(arguments);
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageView(path: string) {
  window.gtag("config", window.gtag.id, {
    page_path: path,
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

type MetricName = Pick<Metric, "name">["name"];

const metricLabel: Record<MetricName, string> = {
  CLS: "Cumulative Layout Shift",
  FCP: "First Contentful Paint",
  FID: "First Input Delay",
  LCP: "Largest Contentful Paint",
  TTFB: "Time to First Byte",
};

function reportHandler(metric: Metric) {
  event({
    action: metric.name,
    category: "Performance",
    label: metricLabel[metric.name],
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

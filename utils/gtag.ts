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
export function pageView(url: URL | string) {
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_path: url,
    send_to: window.gtag.id,
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

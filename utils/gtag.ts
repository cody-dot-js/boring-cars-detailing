declare global {
  interface Window {
    dataLayer: any[];
    gtag: typeof gtag;
  }
}

export function gtag() {
  window.dataLayer.push(arguments);
}

export function pageView(url: URL | string, GA_MEASUREMENT_ID: string) {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

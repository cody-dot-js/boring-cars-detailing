declare global {
  interface Window {
    dataLayer: any[];
    gtag: typeof gtag & { id: string; enabled: boolean };
  }
}

export function gtag() {
  window.dataLayer.push(arguments);
}

export function pageView(url: URL | string) {
  window.gtag("config", window.gtag.id, {
    page_path: url,
  });
}

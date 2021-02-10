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

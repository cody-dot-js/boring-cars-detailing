import * as React from "react";
import type { AppProps } from "next/app";
import "styles/index.css";
import type { MaybeHasPageLayout } from "types/PageLayout";
import { measureWebVitals, pageView } from "utils/gtag";

function handleRouteChange(url: string) {
  pageView(url);
  measureWebVitals();
}

function App({ Component, pageProps, router }: AppProps) {
  const { pageLayout = () => (page) => page } = Component as MaybeHasPageLayout;

  React.useEffect(() => {
    measureWebVitals();
  }, []);

  React.useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return pageLayout(pageProps)(<Component {...pageProps} />);
}

export default App;

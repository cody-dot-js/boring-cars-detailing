import * as React from "react";
import type { AppProps } from "next/app";
import "styles/index.css";
import type { MaybeHasPageLayout } from "types/PageLayout";
import { measureWebVitals, pageView } from "utils/gtag";
import { useRouteChanged } from "hooks/useRouteChanged";

function handleRouteChange(url: string) {
  pageView(url);
  measureWebVitals();
}

function App({ Component, pageProps }: AppProps) {
  const { pageLayout = () => (page) => page } = Component as MaybeHasPageLayout;

  React.useEffect(() => {
    measureWebVitals();
  }, []);

  useRouteChanged(handleRouteChange);

  return pageLayout(pageProps)(<Component {...pageProps} />);
}

export default App;

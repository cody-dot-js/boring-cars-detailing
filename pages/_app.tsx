import * as React from "react";
import type { AppProps } from "next/app";
import "styles/index.css";
import type { MaybeHasPageLayout } from "types/PageLayout";
import { pageView } from "utils/gtag";
import { useEnv } from "hooks/useEnv";

function App({ Component, pageProps, router }: AppProps) {
  const { pageLayout = () => (page) => page } = Component as MaybeHasPageLayout;
  const { GA_MEASUREMENT_ID } = useEnv();

  React.useEffect(() => {
    function handleRouteChange(url: URL | string) {
      pageView(url, GA_MEASUREMENT_ID);
    }

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [GA_MEASUREMENT_ID, router.events]);

  return pageLayout(pageProps)(<Component {...pageProps} />);
}

export default App;

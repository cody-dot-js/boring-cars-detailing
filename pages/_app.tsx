import * as React from "react";
import type { AppProps } from "next/app";
import "styles/index.css";
import type { MaybeHasPageLayout } from "types/PageLayout";
import { pageView } from "utils/gtag";

function App({ Component, pageProps, router }: AppProps) {
  const { pageLayout = () => (page) => page } = Component as MaybeHasPageLayout;

  React.useEffect(() => {
    router.events.on("routeChangeComplete", pageView);
    return () => {
      router.events.off("routeChangeComplete", pageView);
    };
  }, [router.events]);

  return pageLayout(pageProps)(<Component {...pageProps} />);
}

export default App;

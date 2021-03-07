import * as React from "react";
import type { AppProps } from "next/app";
import "styles/index.css";
import type { MaybeHasPageLayout } from "types/PageLayout";
import { measureWebVitals, pageView } from "utils/gtag";
import { useRouteChanged } from "hooks/useRouteChanged";
import { QueryClient, QueryClientProvider } from "react-query";

function handleRouteChange(url: string) {
  pageView(url);
  measureWebVitals();
}

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  const { pageLayout = () => (page) => page } = Component as MaybeHasPageLayout;

  React.useEffect(() => {
    measureWebVitals();
  }, []);

  useRouteChanged(handleRouteChange);

  return pageLayout(pageProps)(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;

import type { AppProps } from "next/app";
import "styles/index.css";
import type { MaybeHasPageLayout } from "types/PageLayout";

function App({ Component, pageProps }: AppProps) {
  const { pageLayout = () => (page) => page } = Component as MaybeHasPageLayout;

  return pageLayout(pageProps)(<Component {...pageProps} />);
}

export default App;

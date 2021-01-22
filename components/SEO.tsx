import Head from "next/head";

export function SEO() {
  return (
    <Head>
      <title>Boring Cars Detailing</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Boring Cars Detailing" />
      <meta
        property="og:description"
        content="Website for Boring Cars Detailing."
      />
      <meta property="og:image" content="/og-image.png" />
      <meta
        property="twitter:description"
        content="Website for Boring Cars Detailing."
      />
      <meta property="twitter:image" content="/og-image.png" />
      <meta name="twitter:site" content="@boringcarsdeta1" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#db2577" />
      <meta name="theme-color" content="#db2577" />
      <meta name="msapplication-TileColor" content="#db2577" />
    </Head>
  );
}

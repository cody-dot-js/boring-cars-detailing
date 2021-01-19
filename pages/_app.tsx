import "styles/index.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Boring Cars Detailing</title>
        <meta content="Boring Cars Detailing" property="og:title" />
        <link href="/favicon-32x32.png" rel="shortcut icon" type="image/x-icon" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="Boring Cars Detailing" property="og:title" />
        <meta content="Website for Boring Cars Detailing." property="og:description" />
        <meta content="Website for Boring Cars Detailing." property="twitter:description" />
        <meta content="summary" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta property="og:image" content="/twitter-card.png" />
        <meta property="twitter:image" content="/twitter-card.png" />
        {/* <meta name="twitter:site" content="@boringcarsdetailing" /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import { defaultDescription, defaultTitle, socialIds } from "config";
import Head from "next/head";

export interface SEOProps {
  title?: string;
  description?: string;
  robots?: string;
}

const defaultRobots = "index,follow";

export function SEO(props: SEOProps) {
  const title: string = Boolean(props.title)
    ? `${props.title} | ${defaultTitle}`
    : defaultTitle;
  const description: string = props.description || defaultDescription;
  const robots: string = props.robots || defaultRobots;

  return (
    <Head>
      <title key="title">{title}</title>
      <meta property="og:title" key="og:title" content={title} />

      <meta name="description" key="description" content={description} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta
        property="twitter:description"
        key="twitter:description"
        content={description}
      />

      <meta name="robots" key="robots" content={robots} />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="twitter:image" content="/og-image.png" />
      <meta name="twitter:site" content={`@${socialIds.twitter}`} />
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
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ec4899" />
      <meta name="theme-color" content="#ec4899" />
      <meta name="msapplication-TileColor" content="#ec4899" />
      <link rel="manifest" href="/manifest.webmanifest" />
    </Head>
  );
}

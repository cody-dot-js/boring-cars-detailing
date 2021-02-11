import { Env } from "utils/getEnv";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en-US" dir="ltr" className="h-full">
        <Head>
          <link
            href="assets/fonts/inter.css"
            ref="stylesheet preload"
            as="font"
          />
          <link
            href="assets/fonts/flash-back.css"
            rel="stylesheet preload"
            as="font"
          />
          <link
            href="assets/fonts/outrun-future.css"
            rel="stylesheet preload"
            as="font"
          />
          <Analytics {...process.env} />
        </Head>
        <body className="bg-background h-full text-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

function Analytics({ VERCEL_ENV, GA_MEASUREMENT_ID }: Partial<Env>) {
  const isAnalyticsEnabled =
    VERCEL_ENV === "production" && Boolean(GA_MEASUREMENT_ID);
  const gtagScriptSrc = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  return (
    <>
      {isAnalyticsEnabled && <script async src={gtagScriptSrc} />}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag.id = "${GA_MEASUREMENT_ID}";
        gtag.enabled = ${isAnalyticsEnabled};
        gtag("js", new Date());
        gtag("config", "${GA_MEASUREMENT_ID}", { "transport_type": "beacon" });
        `.trim(),
        }}
      />
    </>
  );
}

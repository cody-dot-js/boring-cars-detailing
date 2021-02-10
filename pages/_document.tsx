import { Env, getEnvAsDataset } from "utils/getEnv";
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
    const dataset = getEnvAsDataset();

    return (
      <Html lang="en-US" dir="ltr" className="h-full">
        <Head>
          <link rel="stylesheet" href="assets/fonts/inter.css" />
          <link rel="stylesheet" href="assets/fonts/flash-back.css" />
          <link rel="stylesheet" href="assets/fonts/outrun-future.css" />
          <Analytics {...process.env} />
        </Head>
        <body className="bg-background h-full text-gray-50" {...dataset}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

function Analytics({ VERCEL_ENV, GA_MEASUREMENT_ID }: Partial<Env>) {
  const isAnalyticsDisabled = VERCEL_ENV !== "production" || !GA_MEASUREMENT_ID;
  const gtagScriptSrc = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  if (isAnalyticsDisabled) {
    return null;
  }

  return (
    <>
      <script async src={gtagScriptSrc} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "${GA_MEASUREMENT_ID}", {
          page_path: window.location.pathname,
        });
        `,
        }}
      />
    </>
  );
}

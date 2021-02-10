import { getEnvAsDataset } from "utils/getEnv";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { Analytics } from "components/Analytics";

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
        </Head>
        <Analytics />
        <body className="bg-background h-full text-gray-50" {...dataset}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

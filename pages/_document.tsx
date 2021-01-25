import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en-US" dir="ltr" className="h-full">
        <Head>
          <link rel="stylesheet" href="assets/fonts/inter.css" />
          <link rel="stylesheet" href="assets/fonts/flash-back.css" />
          <link rel="stylesheet" href="assets/fonts/outrun-future.css" />
        </Head>
        <body className="bg-background h-full text-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

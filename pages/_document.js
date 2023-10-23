import Document, { Head, Html, NextScript, Main } from "next/document";

class MyDocuments extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocuments;

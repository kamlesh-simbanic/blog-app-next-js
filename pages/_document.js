import Document, { Head, Html, NextScript, Main } from "next/document";

class MyDocuments extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notification"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocuments;

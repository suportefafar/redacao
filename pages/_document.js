import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

          <link rel="icon" href="/images/icon.svg" />
        </Head>
        <body
          style={{
            display: "flex",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* ... other meta tags ... */}
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="bg-custom-beige">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
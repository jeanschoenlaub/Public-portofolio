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
        <body>
        <script dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.body.className = 'bg-gray-900';
                } else {
                  document.body.className = 'bg-custom-beige';
                }
              })();
            `}}></script>
        <style dangerouslySetInnerHTML={{
            __html: `
              body:not(.theme-ready) main { opacity: 0; }
              body.theme-ready main { opacity: 1; }
            `}}></style>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700;900&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="icon" href="/ssbd.png" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

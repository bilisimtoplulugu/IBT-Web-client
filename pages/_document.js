import Document, {Html, Head, Main, NextScript} from 'next/document';
class MyDocument extends Document {
 
  render() {
    return (
      <Html lang="tr">
        <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
       <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

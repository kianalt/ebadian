import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, locale: ctx?.locale || 'fa' }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.locale === 'fa' && (
            <>
              <link rel="stylesheet" href="/rtl/globals.css" />
              <link rel="stylesheet" href="/ltr/custom.css" />
              <link rel="stylesheet" href="/rtl/rtl.css" />
            </>
          )}
          {this.props.locale === 'en' && (
            <>
              <link
                href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
                rel="stylesheet"
              />
              <link rel="stylesheet" href="/ltr/globals.css" />
              <link rel="stylesheet" href="/ltr/custom.css" />
            </>
          )}
        </Head>
        <body dir={this.props.locale === 'fa' ? 'rtl' : 'ltr'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

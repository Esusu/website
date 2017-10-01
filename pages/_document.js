import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class Page extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="robots" content="noodp"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta httpEquiv="X-UA-Compatible" content="requiresActiveX=true"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta property="og:type" content="website"/>
          <meta name="twitter:site" content="@getesusu"/>
          <meta name="twitter:creator" content="@getesusu"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="application-name" content="Esusu"/>
          <meta name="apple-mobile-web-app-title" content="Esusu"/>
          <meta name="theme-color" content="#198F45"/>
          <meta name="msapplication-navbutton-color" content="#198F45"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
          <meta name="msapplication-starturl" content="/"/>
          <meta name="google-site-verification" content="-FtaW8Ltp3gNj-b3DWn8d0SZlA5pE0zb40Z5qrFjxI8" />
          <link rel="manifest" href="/static/manifest.json"/>
          <link rel="shortcut icon" href="/static/esusu.ico" />
          <link rel="icon" type="image/png" sizes="128x128" href="/static/esusu@128x128.png"/>
          <link rel="apple-touch-icon" type="image/png" sizes="128x128" href="/static/esusu@128x128.png"/>
          <link rel="icon" type="image/png" sizes="144x144" href="/static/esusu@144x144.png"/>
          <link rel="icon" type="image/png" sizes="152x152" href="/static/esusu@152x152.png"/>
          <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="/static/esusu@152x152.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/static/esusu@192x192.png"/>
          <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/esusu@192x192.png"/>
          <link rel="icon" type="image/png" sizes="64x64" href="/static/esusu@64x64.png"/>
          <link rel="apple-touch-icon" type="image/png" sizes="64x64" href="/static/esusu@64x64.png"/>
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

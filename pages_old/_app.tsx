import React, { ReactElement } from 'react'

import Head from 'next/head'

import { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="dkdJiOZg4vB9ojt3PWKNwFv6T2TZPLEC7reKWrOWiFQ"
        />
        <title>Blog - Vitalii Melnychuk</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.ico"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App

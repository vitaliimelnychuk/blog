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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App

import React from 'react';

import Head from 'next/head'

import { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="dkdJiOZg4vB9ojt3PWKNwFv6T2TZPLEC7reKWrOWiFQ" />
        <title>Blog - Vitaliy Melnychuk</title>
        <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

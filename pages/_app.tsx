import React, { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head'

import * as Fathom from 'fathom-client';

import { AppProps } from 'next/app'

// Record a pageview when route changes
Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});


export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load();
      Fathom.setSiteId('ZFEWBXJZ');
      Fathom.trackPageview();
    }
  }, []);

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vitaliy Melnychuk :: Personal Blog</title>
        <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

import { ReactChild } from 'react';

import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

interface IMetaProps {
  children: ReactChild;
}
export default ({ children }: IMetaProps) => (
  <div>
    <Head>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <title>Vitalii Melnychuk :: Personal Blog</title>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />
    </Head>
    <Header />
    <Meta />
    {children}
    <Footer />
    <style jsx global>{`
      a:link {
        color: black;
        text-decoration: none;
      }
      a:visited {
      color: black;
      }
      button:hover {
        cursor: pointer;
      }
      input:focus,
      button:focus,
      textarea:focus {
        outline: none;
      }
      body {
        font-size: 14px;
      }
    `}</style>
  </div>
);

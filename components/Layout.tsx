import { ReactChild } from 'react';

import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

interface IMetaProps {
  children: ReactChild;
}
export default ({ children }: IMetaProps) => (
  <div className="container">
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
        font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif;
        font-size: 14px;
        font-style: normal;
        font-variant: normal;
        font-weight: 400;
        line-height: 20px;
      }
      h1 {
        font-size: 24px;
        font-style: normal;
        font-variant: normal;
        font-weight: 700;
        line-height: 26.4px;
      }
      h3 {
        font-size: 18px;
        font-style: normal;
        font-variant: normal;
        font-weight: 700;
        line-height: 22px;
      }
    `}</style>
    <style jsx>{`
    .container {
        max-width:1200px;
        margin: 0 auto;
        padding: 5px;
      }
    `}</style>
  </div>
);

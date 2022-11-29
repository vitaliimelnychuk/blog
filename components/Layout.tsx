import Header from './Header'
import Footer from './Footer'
import { ReactElement } from 'react'

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => (
  <div className="container">
    <Header />
    {children}
    <Footer />
    <style jsx global>{`
      a:link {
        color: black;
        text-decoration: underline;
      }
      a:hover {
        text-decoration: none;
      }
      a:visited {
        color: black;
      }
      img {
        width: 100%;
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
        font-family: 'PT Sans';
        font-size: 14px;
        font-style: normal;
        font-variant: normal;
        font-weight: 400;
        line-height: 20px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-style: normal;
        font-variant: normal;
        font-weight: 700;
      }
      blockquote {
        font-size: 17px;
        line-height: 23px;
      }
      pre,
      code {
        margin: 0;
        padding: 0;
      }

      /** https://github.com/highlightjs/highlight.js/blob/master/src/styles/github-gist.css **/

      .hljs {
        display: block;
        background: white;
        color: #333333;
        overflow-x: auto;
        border: 1px solid #c1c1c1;
        border-radius: 5px;
        padding: 10px;
      }

      .hljs-comment,
      .hljs-meta {
        color: #969896;
      }

      .hljs-variable,
      .hljs-template-variable,
      .hljs-strong,
      .hljs-emphasis,
      .hljs-quote {
        color: #df5000;
      }

      .hljs-keyword,
      .hljs-selector-tag,
      .hljs-type {
        color: #d73a49;
      }

      .hljs-literal,
      .hljs-symbol,
      .hljs-bullet,
      .hljs-attribute {
        color: #0086b3;
      }

      .hljs-section,
      .hljs-name {
        color: #63a35c;
      }

      .hljs-tag {
        color: #333333;
      }

      .hljs-title,
      .hljs-attr,
      .hljs-selector-id,
      .hljs-selector-class,
      .hljs-selector-attr,
      .hljs-selector-pseudo {
        color: #6f42c1;
      }

      .hljs-addition {
        color: #55a532;
        background-color: #eaffea;
      }

      .hljs-deletion {
        color: #bd2c00;
        background-color: #ffecec;
      }

      .hljs-link {
        text-decoration: underline;
      }

      .hljs-number {
        color: #005cc5;
      }

      .hljs-string {
        color: #032f62;
      }
    `}</style>
    <style jsx>{`
      .container {
        max-width: 828px;
        margin: 0 auto;
        padding: 5px;
      }
    `}</style>
  </div>
)

export default Layout

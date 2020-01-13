import { ReactChild } from 'react';

import Highlight, { HighlightProps } from 'react-highlight'

interface IHighlightProps {
  title?: string;
  file: string;
  children: ReactChild
}

export default ({ children, file, title, ...highlightProps }: IHighlightProps & HighlightProps) => (
  <div className="container">
    <div className="title">
      <span><b>{title}</b></span>
      <span className="file">{file}</span>
    </div>
    <Highlight {...highlightProps} >{children}</Highlight>
    <style jsx>{`
      .container {
        font-size:14px;
        line-height:18px;
        border-bottom:1px solid #000;
      }
      .title {
        display:grid;
        grid-template-columns: 3fr 1fr;
        align-items: end;

        text-indent: 0px;
        text-align:left;
        border-bottom:1px solid #000;
        line-height:22px;
      }
      .file {
        font-size:14px;
        text-align:right;

      }
    `}</style>
    <style jsx global> {`
      /** https://github.com/highlightjs/highlight.js/blob/master/src/styles/github-gist.css **/

      .hljs {
        display: block;
        background: white;
        color: #333333;
        overflow-x: auto;
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
  </div >
)

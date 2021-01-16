import { ReactChild } from 'react'

import Header from './Header'
import Footer from './Footer'

interface IMetaProps {
  children: ReactChild
}
const Layout = ({ children }: IMetaProps) => (
  <div className="container">
    <Header />
    {children}
    <Footer />
    <style jsx global>{`
      a:link {
        color: black;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
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
        font-family: Garamond, Baskerville, 'Baskerville Old Face',
          'Hoefler Text', 'Times New Roman', serif;
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

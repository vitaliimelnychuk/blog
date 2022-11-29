import { TABLET_MAX_WITH } from '../utils/media'

import Link from 'next/link'

const Header: React.FC = () => (
  <div className="container">
    <div className="name">Vitalii Melnychuk</div>
    {/* TODO: add current page highlight */}
    <div className="links">
      <Link href="/">
        <span>Me</span>
      </Link>
      <Link href="/books">
        <span>Book reviews</span>
      </Link>
      <Link href="/talks">
        <span>Talks</span>
      </Link>
    </div>

    <style jsx>{`
      .container {
        font-family: 'Averia Serif Libre', cursive;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 10px;
      }

      .name {
        font-size: 34px;
        font-weight: 700;
        line-height: 50px;
      }

      .links {
        text-align: right;
        justify-self: center;
        align-self: center;
      }

      .links span {
        display: inline-block;
        font-size: 25px;
        font-weight: 400;
        padding-left: 34px;
        text-decoration: none;
      }

      .links span:first-of-type {
        padding-left: 0;
      }

      .links span:hover {
        text-decoration: underline;
        text-decoration-color: #9ddadb;
        text-decoration-thickness: 3.5px;
        text-underline-offset: 1px;
      }

      ul {
        margin-block-start: 0;
      }

      @media screen and (max-device-width: ${TABLET_MAX_WITH}) {
        .container {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: 10px;
        }

        .name,
        .links {
          text-align: center;
        }
      }
    `}</style>
  </div>
)

export default Header

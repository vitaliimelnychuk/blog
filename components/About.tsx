import Underline from './Text/Underline'
import { MOBILE_MAX_WITH } from '../utils/media'

const About: React.FC = () => (
  <div className="container">
    <div className="intro">
      <p>
        Hi everyone{' '}
        <span role="img" aria-label="hi">
          👋
        </span>
      </p>
      <p>
        I’m Vitalii and I’m a <Underline>Performance Engineer</Underline> at
        FARFETCH in Porto.
      </p>
      <p>
        But also:
        <ul>
          <li>
            ️<span>morning runner</span>
          </li>
          <li>
            <span>passionate about Python and NodeJS</span>️
          </li>
          <li>
            <span>in love with Portugal</span>️
          </li>
        </ul>
      </p>
    </div>

    <div className="photo"></div>

    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        justify-items: center;
        vertical-align: center;
        padding-top: 30px;
        padding-bottom: 20px;
      }

      .photo {
        display: block;
        align-self: center;
        justify-self: center;
        background-image: url(/static/me.svg);
        background-size: 171px;
        background-repeat: no-repeat;
        width: 170px;
        height: 170px;
        border: 1px solid #000;
        border-radius: 90px;
        border: 1.6px solid #000;
        vertical-align: center;
        text-align: center;
        font-size: 16px;
      }

      .intro {
        max-width: 420px;
        text-align: left;
        font-size: 23px;
        line-height: 35px;
      }

      .intro .underline {
        text-decoration: underline;
        text-underline-position: under;
        text-underline-offset: 1px;
        text-decoration-color: #9ddadb;
        text-decoration-thickness: 3.5px;
      }

      .intro p {
        margin-top: 25px;
      }

      .contact p {
        margin: 0;
        padding: 0;
      }

      ul {
        list-style-type: none;
        margin-block-start: 0;
      }

      ul li {
        color: white;
        position: relative;
      }

      ul li::before {
        content: '';
        width: 8px;
        height: 8px;
        background: black;
        position: absolute;
        left: -30px;
        border: 1px solid black;
        top: 14px;
      }
      ul li span {
        color: black;
      }

      @media screen and (max-device-width: ${MOBILE_MAX_WITH}) {
        .container {
          display: grid;
          grid-template-columns: 1fr;
          padding-top: 20px;
        }
        .intro {
          padding-top: 10px;
        }
      }
    `}</style>
  </div>
)

export default About

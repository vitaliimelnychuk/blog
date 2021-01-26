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
        I’m Vitalii and I’m a{' '}
        <span className="underline">Performance Engineer</span> at FARFETCH in
        Porto.
      </p>
      <p>
        But also:
        <ul>
          <li>️morning runner </li>
          <li>️passionate about Python and NodeJS</li>
          <li>️in love with Portugal</li>
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
        padding-top: 50px;
        padding-bottom: 20px;
        border-bottom: 1px solid #000;
      }

      .photo {
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
      @media screen and (max-device-width: ${MOBILE_MAX_WITH}) {
        .container {
          display: grid;
          grid-template-columns: 1fr;
          padding-top: 20px;
        }
        .intro {
          padding-top: 10px;
          text-align: center;
        }
      }
    `}</style>
  </div>
)

export default About

import { MOBILE_MAX_WITH } from '../utils/media'

export default () => (
  <div className="container">
    <div className="photo">me</div>
    <div className="intro">
      <div className="contact">
        <p><b>Github:</b> <a href="https://github.com/melnychukvitaliy">https://github.com/melnychukvitaliy</a></p>
        <p> </p>
      </div>
      <ul>
        <li>
          Software development, primarily with <b>Python</b> and <b>NodeJS</b>
        </li>
        <li>
          “DevOps”-style infrastructure automation and system administration for Linux and Unix
        </li>
        <li>
          <b>Database design and optimisation</b>, particularly with relational databases and <b>Elasticsearch</b> full-text search
        </li>
        <li>
            Implementing secure and highly-available distributed systems/microservices
        </li>
        <li>
            Interest in opportunities to be a <b>technical mentor for teammates</b>
        </li>
      </ul>
    </div>
    <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          justify-items: center;
          vertical-align: center;
          padding-top: 10px;
          padding-bottom:20px;
          border-bottom: 1px solid #000;
        }

        .container .photo {
          width: 100px;
          height: 100px;
          border: 1px solid #000;
          vertical-align: center;
          text-align: center;
          font-size: 16px;
        }

        .container .intro {
          width:100%;
          text-align: left;
          font-size: 17px;
          line-height: 23px;
        }

        .contact p {
          margin: 0;
          padding: 0;
        }
        @media screen and (max-device-width: ${MOBILE_MAX_WITH}){
          .container {
          display: grid;
          grid-template-columns: 1fr;
          padding-top: 20px;

          }
          .container .intro .contact {
            padding-top:10px;
            text-align:center;
          }
        }
      `}</style>
  </div>
);

import { MOBILE_MAX_WITH } from '../utils/media'
import { twitterProfile } from './config'
import ExternalLink from './ExternalLink'

const About = () => (
  <div className="container">
    <div className="photo">
      <p>me</p>
      <a href={`https://twitter.com/${twitterProfile}`} target="blank">
        <img src="/static/twitter.svg" height="34px" />
      </a>
    </div>
    <div className="intro">
      <div className="contact">
        <p>
          <b>Github: </b>
          <a href="https://github.com/melnychukvitaliy" target="blank">
            https://github.com/melnychukvitaliy
          </a>
        </p>
        <p> </p>
      </div>
      <ul>
        <li>
          Morning Runner in{' '}
          <ExternalLink href="https://strava.com/athletes/29911157">
            strava.com`
          </ExternalLink>
        </li>
        <li>
          Software development, primarily with <b>Python</b> and <b>NodeJS</b>
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
        padding-bottom: 20px;
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
        width: 100%;
        text-align: left;
        font-size: 17px;
        line-height: 23px;
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
        .container .intro .contact {
          padding-top: 10px;
          text-align: center;
        }
      }
    `}</style>
  </div>
)

export default About

import Underline from './Text/Underline'
import ExternalLink from './ExternalLink'
import {
  twitterProfileLink,
  linkedinProfileLink,
  githubProfileLink,
} from './config'

const Footer: React.FC = () => {
  return (
    <div>
      <div>
        <h2 className="footer__title">
          <span role="img" aria-label="letter">
            ✉️
          </span>

          <Underline>
            <>Get in touch</>
          </Underline>
        </h2>

        <p className="email">vvv.melnychuk@gmail.com</p>
        <p className="social">
          <ExternalLink href={linkedinProfileLink}>linkedin</ExternalLink> /{' '}
          <ExternalLink href={twitterProfileLink}>twitter</ExternalLink> /{' '}
          <ExternalLink href={githubProfileLink}>github</ExternalLink>
        </p>
        <p className="bottom_text">
          From Porto with sun
          <span role="img" aria-label="sun">
            ☀️
          </span>
        </p>
      </div>
      <style jsx>{`
        p {
          padding: 5px;
          font-size: 18px;
        }
        .email {
          text-decoration: underline;
        }
        .social {
          font-weight: 700;
          padding-bottom: 15px;
        }
        .footer__title {
          font-size: 34px;
          margin: 60px 0 40px;
        }
        .footer__title > span {
          padding-right: 15px;
          font-size: 31px;
        }
      `}</style>
    </div>
  )
}

export default Footer

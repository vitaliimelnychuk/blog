import { ReactChild } from 'react'

interface IExternalLinkProps {
  href: string
  children: ReactChild
}

const ExternalLink: React.FC<IExternalLinkProps> = ({ href, children }) => (
  <a href={href} target="blank">
    {children}
    <style jsx>{`
      a,
      a:link,
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </a>
)
export default ExternalLink

import { ReactChild } from 'react'

interface IExternalLinkProps {
  href: string
  children: ReactChild
}

const ExternalLink = ({ href, children }: IExternalLinkProps) => (
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

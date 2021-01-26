import Link from 'next/link'

import { MOBILE_MAX_WITH } from '../../utils/media'
import { getFormattedDate } from '../../utils/date'
import { IMarkdownArticle } from '../../lib/api'
import Button from './../Button'

interface IArticlePreviewProps {
  article: IMarkdownArticle
}

const ArticlePreview: React.FC<IArticlePreviewProps> = ({
  article: { title, description, url, date },
}) => {
  return (
    <div className="container">
      <div>
        <p className="date">{getFormattedDate(new Date(date))}</p>
        <h3 className="title">{title}</h3>
      </div>
      <div className="description">{description}</div>
      <div className="read-button">
        <Link href={url}>
          <a>
            <Button>Read more</Button>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: auto;
          grid-template-columns: 1fr;
          grid-gap: 10px;
          justify-items: left;
          align-items: top;
          padding: 10px 30px;
          border: 1px solid black;
          border-radius: 12px;
        }
        .description {
          font-size: 16px;
        }
        .title {
          font-size: 22px;
          text-align: left;
          max-width: 280px;
          line-height: 30px;
        }

        @media screen and (max-device-width: ${MOBILE_MAX_WITH}) {
        }
      `}</style>
    </div>
  )
}

export default ArticlePreview

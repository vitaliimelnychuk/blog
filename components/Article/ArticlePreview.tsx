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
          grid-gap: 30px;
          justify-items: left;
          align-items: top;
          padding: 10px 50px;
          border: 1px solid black;
          border-radius: 12px;
        }
        .date {
          font-size: 19px;
          color: #adadad;
        }
        .description {
          font-size: 16px;
          line-height: 22px;
        }
        .title {
          font-size: 22px;
          text-align: left;
          max-width: 280px;
          line-height: 30px;
          margin: 0;
        }

        @media screen and (max-device-width: ${MOBILE_MAX_WITH}) {
          .container {
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default ArticlePreview

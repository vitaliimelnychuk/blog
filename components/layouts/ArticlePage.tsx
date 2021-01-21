import { ReactChild } from 'react'

import MetaPreviewLink from '../Meta/PreviewLink'
import { getFormattedDate } from '../../utils/date'
import { IMarkdownArticle } from '../../lib/api'

interface IArticlePageProps {
  children: ReactChild
}

const ArticlePage = ({
  children,
  title,
  date,
  url,
}: IArticlePageProps & IMarkdownArticle) => (
  <div>
    <MetaPreviewLink title={title} url={url} />
    <h1>{title}</h1>
    <p>{getFormattedDate(new Date(date))}</p>
    <div className="content">{children}</div>
    <style jsx>
      {`
        .content {
          font-family: 'Montserrat';
          padding-top: 5px;
          line-height: 24px;
          font-size: 16px;
          text-align: justify;
          padding: 10px;
          text-indent: 20px;
        }
      `}
    </style>
  </div>
)

export default ArticlePage

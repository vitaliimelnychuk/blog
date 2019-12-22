
import Link from 'next/link'

import { getFormattedDate } from '../../utils/date'
import { Article } from '../../content/articles'

function Post({ title, url, date }: Article) {

  return <div className="container">
    <div>
      <h3>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </h3>
    </div>
    <div className="date">
    {getFormattedDate(date)}
    </div>

    <style jsx>{`
      .container {
        padding: 10px;
      }
      .container div {
        display:inline-block;
      }
      .date {
        padding:10px;
      }
    `}</style>
  </div >;
}

export default Post;

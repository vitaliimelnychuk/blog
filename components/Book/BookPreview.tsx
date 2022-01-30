import Button from './../Button'

import { MOBILE_MAX_WITH } from '../../utils/media'
import { IMarkdownBook } from '../../lib/api'

const BookPreview: React.FC<IMarkdownBook> = ({
  title,
  author,
  amazonUrl,
  coverImg,
  description,
}) => (
  <div className="container">
    <h3 className="title">
      {author} :: {title}
    </h3>

    <div className="description">{description}</div>

    <img
      className="content"
      src={coverImg}
      title={title}
      width="140px"
      alt={title}
      loading="lazy"
    />

    <div>
      <a href={amazonUrl} target="blank">
        <Button>In amazon</Button>
      </a>
    </div>
    <style jsx>{`
      h3 {
        margin: 0;
      }
      ul {
        margin: 0;
      }
      .container {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        grid-gap: 30px;
        justify-items: center;
        align-items: top;
        border: 1px solid black;
        border-radius: 12px;
        padding: 30px;
        text-align: center;
      }
      .container img {
        width: 40%;
      }

      .content .description {
        text-align: justify;
        padding: 10px 0;
      }

      @media screen and (max-device-width: ${MOBILE_MAX_WITH}) {
        .content {
          display: grid;
          grid-template-columns: 1fr;
          padding-top: 20px;
        }
      }
    `}</style>
  </div>
)

export default BookPreview


import Link from 'next/link';

import { TBook } from '../../content/books'
import Button from './../Button';

import { MOBILE_MAX_WITH } from '../../utils/media'
import { getFormattedDate } from '../../utils/date'

interface IBookPreview {
  showButtons: boolean;
}

export default ({ showButtons, title, description, author, date, img, url, slug }: IBookPreview & TBook) => (
  <div className="container">
    <div className="title">
      <h3>{author} :: {title}</h3>
    </div>
    <div className="content">
      <img src={img} title={title} width="70%" />
      <div className="review">
        <div className="description">
          {description}
        </div>
        <p className="date">{getFormattedDate(date)}</p>
        {/* TODO: use different markup for preview page and book details */}
        {showButtons ? (
          <div className="more-button">
            <Link href={slug}>
              <a>
                <Button>More</Button>
              </a>
            </Link>
            <a href={url} target="blank">
              <Button>In amazon</Button>
            </a>
          </div>
        ) : null}
      </div>
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
         grid-gap: 0px;
         justify-items: center;
         align-items: top;
         border-bottom: 1px solid black;
         padding-top:10px;
      }
      .content {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr 5fr;
        grid-gap: 0px;
        justify-items: center;
        align-items: top;
        padding: 10px;
      }
      .content .description {
         text-align:justify;
         padding: 10px 0;
      }
      .content .date {
        text-align:right;
        padding:0;
        margin:0;
      }
      .content .more-button {
        text-align: center;
      }

      @media screen and (max-device-width: ${MOBILE_MAX_WITH}){
        .content {
           display: grid;
           grid-template-columns: 1fr;
           padding-top: 20px;
         }
       }
    `}</style>
  </div>
)

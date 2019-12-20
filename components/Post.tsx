
import { MOBILE_MAX_WITH } from '../utils/media'

import Button from './Button';
import Link from 'next/link'

interface IPostProps {
  title: string;
  date: string;
  description: string;
  url: string
}

function Post({ title, description, url, date }: IPostProps) {
  return <div className="container">
    <div className="title">
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
    <div>
      <div className="description">
        {description}
      </div>
      <div className="read-button">
        <Link href={url}>
          <a>
            <Button>Read</Button>
          </a>
        </Link>
      </div>

    </div>
    <style jsx>{`
    .container {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        justify-items: center;
        align-items: top;
        padding: 10px;
        border-bottom: 1px solid black;
      }
      .description {
        text-align:justify;
        padding: 10px 0;
      }
      .title {
        text-align:center;
      }
      .read-button {
        text-align: center;
      }
      @media screen and (max-device-width: ${MOBILE_MAX_WITH}){
        .container {
          display: grid;
          grid-template-columns: 1fr;
          padding-top: 20px;
        }
        h3 {
          margin: 5px;
        }
      }
    `}</style>
  </div >;
}

export default Post;

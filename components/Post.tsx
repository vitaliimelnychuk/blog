
import Button from './Button';
import Link from 'next/link'

interface IPostProps {
  title: string;
  description: string;
  url: string
}

function Post({ title, description, url }: IPostProps) {
  return <div className="container">
    <div>
      <h3>{title}</h3>
    </div>
    <div className="description">
      {description}
    </div>
    <div>
      <Link href={url}>
        <a>
          <Button >Read</Button>
        </a>
      </Link>
    </div>
    <style jsx>{`
    .container {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        grid-gap: 0px;
        justify-items: center;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid black;
      }
      .container h3 {
        padding: 0;
        margin: 0;
      }
      .container .description {
        text-align:justify;
        padding: 10px 0;
      }
    `}</style>
  </div >;
}

export default Post;

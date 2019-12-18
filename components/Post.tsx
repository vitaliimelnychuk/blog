
import Button from './Button';
import Link from 'next/link'

interface IPostProps {
  title: string;
  description: string;
  url: string
}

function Post({ title, description, url }: IPostProps) {
  return <div className="container">
    <h2>{title}</h2>
    <p className="description">{description}</p>
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
        grid-auto-rows: 40px;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        grid-gap: 0px;
        justify-items: center;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid black;
      }
      .container .description {
        line-height: 2em;
      }
    `}</style>
  </div >;
}

export default Post;

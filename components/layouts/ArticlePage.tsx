
import { ReactChild } from 'react';

interface IArticlePageProps {
  title: string;
  date: string;
  children: ReactChild;
}

export default ({ children, title, date }: IArticlePageProps) => (
  <div>
    <h1>{title}</h1>
    <p>{date}</p>
    <div className="content">
      {children}
    </div>
    <style jsx>{`
      .content {
        padding-top: 5px;
      }
    `}
    </style>
  </div>
)

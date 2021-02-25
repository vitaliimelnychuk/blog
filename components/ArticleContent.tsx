interface IArticleContentProps {
  content: string
}

const ArticleContent: React.FC<IArticleContentProps> = ({ content }) => {
  return (
    <>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
      <style jsx>
        {`
          .markdown a {
            color: #9ddadb;
          }
        `}
      </style>
    </>
  )
}
export default ArticleContent

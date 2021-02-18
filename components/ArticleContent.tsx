interface IArticleContentProps {
  content: string
}

const ArticleContent: React.FC<IArticleContentProps> = ({ content }) => {
  return (
    <>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}
export default ArticleContent

interface IArticleContentProps {
  content: string
}

const ArticleContent = ({ content }: IArticleContentProps) => {
  return (
    <>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}
export default ArticleContent

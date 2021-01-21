import Layout from '../components/Layout'
import ArticlePreview from '../components/Article/ArticlePreview'
import About from '../components/About'
import MetaPreviewLink from '../components/Meta/PreviewLink'

import { getAllDocuments, IMarkdownArticle } from '../lib/api'

interface IhomePageProps {
  articles: IMarkdownArticle[]
}

const HomePage = ({ articles }: IhomePageProps) => (
  <Layout>
    <div>
      <MetaPreviewLink url="/" title="Blog" />
      <About />
      <h2>Articles </h2>
      <div className="posts">
        {articles.map((article) => (
          <ArticlePreview {...{ article, date: new Date(article.date) }} />
        ))}
      </div>
    </div>
  </Layout>
)

export async function getStaticProps() {
  const articles = getAllDocuments<IMarkdownArticle>('article')

  return {
    props: {
      articles,
    },
  }
}

export default HomePage

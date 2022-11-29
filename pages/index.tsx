import Layout from '../components/Layout'
import ArticlePreview from '../components/Article/ArticlePreview'
import About from '../components/About'
import MetaPreviewLink from '../components/Meta/PreviewLink'
import Underline from '../components/Text/Underline'

import { getAllDocuments, IMarkdownArticle } from '../lib/api'

interface IHomePageProps {
  articles: IMarkdownArticle[]
}

interface IGetStaticPropsResponse {
  props: IHomePageProps
}

const HomePage: React.FC<IHomePageProps> = ({ articles }) => (
  <Layout>
    <div>
      <MetaPreviewLink url="/" title="Blog" />
      <About />
      <div>
        <h2 className="articles__title">
          <span role="img" aria-label="notebook">
            💻
          </span>

          <Underline>
            <>My Articles</>
          </Underline>
        </h2>
        <div className="articles">
          {articles.map((article) => (
            <ArticlePreview
              key={article.slug}
              {...{ article, date: new Date(article.date) }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .articles {
          display: grid;
          grid-template-rows: auto;
          grid-template-columns: 1fr;
          grid-gap: 30px;
        }

        .articles__title {
          font-size: 34px;
          margin-bottom: 40px;
        }

        .articles__title span {
          padding-right: 15px;
          font-size: 31px;
        }
      `}</style>
    </div>
  </Layout>
)

export async function getStaticProps(): Promise<IGetStaticPropsResponse> {
  const articles = getAllDocuments<IMarkdownArticle>('article')

  return {
    props: {
      articles,
    },
  }
}

export default HomePage

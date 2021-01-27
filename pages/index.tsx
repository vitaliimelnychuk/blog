import Layout from '../components/Layout'
import ArticlePreview from '../components/Article/ArticlePreview'
import BookPreview from '../components/Book/BookPreview'
import About from '../components/About'
import MetaPreviewLink from '../components/Meta/PreviewLink'
import Underline from '../components/Text/Underline'

import { getAllDocuments, IMarkdownArticle, IMarkdownBook } from '../lib/api'

interface IHomePageProps {
  articles: IMarkdownArticle[]
  books: IMarkdownBook[]
}

interface IGetStaticPropsResponse {
  props: IHomePageProps
}

const HomePage: React.FC<IHomePageProps> = ({ articles, books }) => (
  <Layout>
    <div>
      <MetaPreviewLink url="/" title="Blog" />
      <About />
      <div>
        <h2 className="articles__title">
          <span role="img" aria-label="notebook">
            💻
          </span>

          <Underline>My Articles</Underline>
        </h2>
        <div className="articles">
          {articles.map((article) => (
            <ArticlePreview
              key={article.slug}
              {...{ article, date: new Date(article.date) }}
            />
          ))}
        </div>

        <h2 className="books__title">
          <span role="img" aria-label="books">
            📚
          </span>

          <Underline>Book Reviews</Underline>
        </h2>

        <div className="books">
          {books.map((book) => (
            <BookPreview key={book.slug} {...book} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .books {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .articles__title {
          font-size: 34px;
          margin-bottom: 40px;
        }

        .books__title {
          font-size: 34px;
          margin: 60px 0 40px;
        }

        .articles__title span,
        .books__title span {
          padding-right: 15px;
          font-size: 31px;
        }
      `}</style>
    </div>
  </Layout>
)

export async function getStaticProps(): Promise<IGetStaticPropsResponse> {
  const articles = getAllDocuments<IMarkdownArticle>('article')
  const books = getAllDocuments<IMarkdownBook>('book')

  return {
    props: {
      articles,
      books,
    },
  }
}

export default HomePage

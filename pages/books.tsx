import Layout from '../components/Layout'
import BookPreview from '../components/Book/BookPreview'
import MetaPreviewLink from '../components/Meta/PreviewLink'
import Underline from '../components/Text/Underline'

import { getAllDocuments, IMarkdownBook } from '../lib/api'

interface IBooksPageProps {
  books: IMarkdownBook[]
}

interface IGetStaticPropsResponse {
  props: IBooksPageProps
}

const BooksPage: React.FC<IBooksPageProps> = ({ books }) => (
  <Layout>
    <div>
      <MetaPreviewLink url="/books" title="Books" />

      <div>
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
          row-gap: 20px;
          column-gap: 30px;
        }

        .books__title {
          font-size: 34px;
          margin: 60px 0 40px;
        }

        .books__title span {
          padding-right: 15px;
          font-size: 31px;
        }
      `}</style>
    </div>
  </Layout>
)

export async function getStaticProps(): Promise<IGetStaticPropsResponse> {
  const books = getAllDocuments<IMarkdownBook>('book')

  return {
    props: {
      books,
    },
  }
}

export default BooksPage

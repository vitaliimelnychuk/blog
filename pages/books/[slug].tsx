import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import MetaPreviewLink from '.././../components/Meta/PreviewLink'
import BookPreview from '.././../components/BookPreview'
import { getBySlug, getUrlBySlug } from '../../content/books'

export default ({ }) => {
  const router = useRouter()
  const { slug } = router.query

  const book = getBySlug(`${slug}`)
  if (!book) {
    // Change with more user friendly page
    return <p>Book Not Found</p>
  }
  return (
    <Layout>
      <div>
        <MetaPreviewLink title={book.title} url={getUrlBySlug(book.slug)} />
        <BookPreview {...book} />
        <div className="content">
          <h2>Quotes</h2>
          <ul>
            {book.quotes.map(quote => (<li>{quote}</li>))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

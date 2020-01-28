import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import MetaPreviewLink from '.././../components/Meta/PreviewLink'
import BookPreview from '.././../components/BookPreview'
import { getBySlug, getUrlBySlug } from '../../content/books'

export default ({ }) => {
  // const router = useRouter()
  // const { slug } = router.query
  const slug = 'the-illustrated-theory-of-everything'
  const book = getBySlug(`${slug}`)

  return (<Layout>
    {book ? <div>
      <MetaPreviewLink title={book.title} url={'/books/the-illustrated-theory-of-everything'} />
      <BookPreview {...book} showButtons={false} />
      <div className="content">
        <h2>Quotes</h2>
        <ul>
          {book.quotes.map(quote => (<li>{quote}</li>))}
        </ul>
      </div>
      {/* TODO: Add page not found handler */}
    </div> : <div></div>}
  </Layout>
  )
}

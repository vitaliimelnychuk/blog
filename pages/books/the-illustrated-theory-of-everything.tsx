import { books } from '../../content/books'

import Layout from '../../components/Layout'
import MetaPreviewLink from '.././../components/Meta/PreviewLink'
import BookPreview from '.././../components/Book/BookPreview'
import BookQuotes from '.././../components/Book/BookQuotes'

const theIllustratedTheoryBookPage = () => {
  const book = books['the-illustrated-theory-of-everything']

  return (
    <Layout>
      <div>
        <MetaPreviewLink title={book.title} url={book.slug} image={book.img} />
        <BookPreview {...book} showButtons={false} />
        <BookQuotes quotes={[]} />
      </div>
    </Layout>
  )
}

export default theIllustratedTheoryBookPage

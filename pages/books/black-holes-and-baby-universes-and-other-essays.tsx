import { books } from '../../content/books'

import Layout from '../../components/Layout'
import MetaPreviewLink from '.././../components/Meta/PreviewLink'
import BookPreview from '.././../components/Book/BookPreview'
import BookQuotes from '.././../components/Book/BookQuotes'

const BlackHolesBookPage = () => {
  const book = books['black-holes-and-baby-universes-and-other-essays']

  return (
    <Layout>
      <div>
        <MetaPreviewLink title={book.title} url={book.slug} image={book.img} />
        <BookPreview {...book} showButtons={false} />
        <BookQuotes
          quotes={[
            'We live in the one specific story that has specific properties and details',
          ]}
        />
      </div>
    </Layout>
  )
}
export default BlackHolesBookPage

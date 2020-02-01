import Layout from '../components/Layout'
import BookPreview from '../components/Book/BookPreview'

import { booksList } from '../content/books'

const Home = () => (
  <Layout >
    <div>
      <h2>Books review</h2>
      <div className="books">
        {booksList.map(book =>
          <BookPreview showButtons={true} key={book.title} {...book} />
        )}
      </div>
    </div>
  </Layout>
);

export default Home;

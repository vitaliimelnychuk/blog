import Layout from '../components/Layout'
import BookPreview from '../components/BookPreview'

import books from '../content/books'

const Home = () => (
  <Layout >
    <div>
      <h2>Books review</h2>
      <div className="books">
        {books.map(book => <BookPreview {...book} />)}
      </div>
    </div>
  </Layout>
);

export default Home;

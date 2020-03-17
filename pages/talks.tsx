import Layout from '../components/Layout'
import TalkPreview from '../components/Talk/TalkPreview'

import { talks } from '../content/talks'

const Home = () => (
  <Layout >
    <div>
      <h2>Talks</h2>
      <div>
        {talks.map(talk => <TalkPreview {...talk} />)}
      </div>
      <div>
      </div>
    </div>
  </Layout>
);

export default Home;

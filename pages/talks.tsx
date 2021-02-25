import Layout from '../components/Layout'
import TalkPreview from '../components/Talk/TalkPreview'
import MetaPreviewLink from '../components/Meta/PreviewLink'

import { talks } from '../content/talks'

const TalksPage: React.FC = () => (
  <Layout>
    <>
      <MetaPreviewLink url="/talks" title="Talks" />
      <div>
        <h2>Talks</h2>
        <div>
          {talks.map((talk) => (
            <TalkPreview key={talk.title} {...talk} />
          ))}
        </div>
        <div></div>
      </div>
    </>
  </Layout>
)

export default TalksPage

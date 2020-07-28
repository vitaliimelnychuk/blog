import articles from '../../content/articles'

import Layout from '../../components/Layout'
import ArticlePage from '../../components/layouts/ArticlePage'
import Highlight from '../../components/Highlight'
import ExternalLink from '../../components/ExternalLink'

const article = articles['2020-08-28-build-a-website-with-gatsby-and-strapi']

export default () => (
  <Layout>
    <ArticlePage {...article} >
      <>
      </>
    </ArticlePage>
  </Layout>
);

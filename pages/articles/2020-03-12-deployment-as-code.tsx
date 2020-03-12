import articles from '../../content/articles'

import Layout from '../../components/Layout'
import ArticlePage from '../../components/layouts/ArticlePage'

const article = articles['2020-03-12-deployment-as-code']

export default () => (
  <Layout >
    <ArticlePage {...article}>
      <div></div>
    </ArticlePage>
  </Layout >
);

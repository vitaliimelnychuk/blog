import articles from '../../content/articles'

import Layout from '../../components/Layout'
import ArticlePage from '../../components/layouts/ArticlePage'

const article = articles['22-12-2019-deploy-your-blog']

export default () => (
  <Layout >
    <ArticlePage {...article}>
      <div>
        <p>You cannot to be sure when will be right time start your blog,
        what's tools should be used and what kind of articles you really what write.</p>

        <p>I'd like to present my blog and technologies have been chosen to make it happen</p>
      </div>

    </ArticlePage>
  </Layout >
);

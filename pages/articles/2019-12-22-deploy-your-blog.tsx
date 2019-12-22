import articles from '../../content/articles'

import Layout from '../../components/Layout'
import ArticlePage from '../../components/layouts/ArticlePage'

const article = articles['2019-12-22-deploy-your-blog']

export default () => (
  <Layout >
    <ArticlePage {...article}>
      <div>
        <p>You couldn't be sure when would be right time start your blog,
        what's tools should be used and what kind of articles you really want to write and finally is it worth my time?</p>

        <p>I like blogs, especially tech blogs, they all bring me new ideas and inspiration but all the time I had one think in mind, will I be able to write something.</p>

        <p>But now, at the end of 2019 I'd like to present my blog and technologies have been chosen to make it happen.</p>

        <h2>Overview</h2>
        <p>If you have found 1 million ways how deploy/manage you blog it wouldn't be enough, there is one more way to do it. </p>
      </div>

    </ArticlePage>
  </Layout >
);

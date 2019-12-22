import Layout from '../components/Layout'
import ArticlePreview from '../components/Article/ArticlePreview'
import About from '../components/About'

import articles from '../content/articles'

const Home = () => (
  <Layout >
    <div>
      <About />
      <h2>Articles  </h2>
      <div className="posts">
        <ArticlePreview {...articles['2019-12-22-deploy-your-blog']}
          description={`
          I've been thinking to make my blog real for a long time and it's actually happened.
          In 2019 there are a lot of tools/services where you can host  your blog.
          I'd like to share how this blog is deploying and what's sort of pros/cons I have by using this config
          `}
        />
      </div>
    </div>
  </Layout>
);

export default Home;

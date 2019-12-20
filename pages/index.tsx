import Layout from '../components/Layout'
import Post from '../components/Post'
import About from '../components/About'

const Home = () => (
  <Layout >
    <div>
      <About />
      <h2>Articles  </h2>
      <div className="posts">
        <Post
          title='Deploy your blog'
          date='22 Dec 2019'
          description={`
          I've been thinking to make my blog real for a long time and it's actually happened.
          In 2019 there are a lot of tools/services where you can host  your blog.
          I'd like to share how this blog is deploying and what's sort of pros/cons I have by using this config
          `}
          url='/posts/2019-12-17-deploy-your-blog' />
      </div>
    </div>
  </Layout>
);

export default Home;

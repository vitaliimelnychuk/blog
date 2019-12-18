import Layout from '../components/Layout'
import Post from '../components/Post'

const Home = () => (
  <Layout >
    <div>
      <div className="posts">
        <Post
          title='Deploy your blog'
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

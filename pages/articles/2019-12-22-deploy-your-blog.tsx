import articles from '../../content/articles'

import Layout from '../../components/Layout'
import ArticlePage from '../../components/layouts/ArticlePage'

const article = articles['2019-12-22-deploy-your-blog']

export default () => (
  <Layout >
    <ArticlePage {...article}>
      <div>
        <p>You cannot be sure when it is a right time start your blog.
        Which tools should be used, what kinds of articles you want to write and finally is it worth your time?</p>

        <p>I like blogs, especially tech blogs. They give me new ideas and inspiration, but at the same time they make me think: "Will I be able to write something like this?".</p>

        <p>However now, at the end of 2019, I'd like to present my blog and technologies that I've chosen to make it happen.</p>

        <h2>Overview</h2>
        <p>I am always trying to keep up with new tech solutions. My favorite ones are those that make our life easier.</p>
        <p>In my experience, I had a chance to work with <b>React</b> and particularly with <b>Next.js</b>.
          I really like the idea of having a single page application and get rid of annoying loaders. Even better is having SPA and code splitting feature.
          Next.js does automatic code splitting and it is based on the pages in your app. It's mostly what I wanted.</p>
        <p>There are millions of ways to deploy/manage your blog. In this article, I will tell about the one I have chosen.</p>

        <h2>Blog Expectations</h2>
        <p>As I said before, there are few points that should be done to make blog easy-to-maintain and flexible to changes.</p>
        <ul>
          <li>Code as a source of truth</li>
          <li>Single page application</li>
          <li>Server side rendering</li>
          <li>Code splitting</li>
          <li>Easy deployment</li>
        </ul>
      </div>

    </ArticlePage>
  </Layout >
);

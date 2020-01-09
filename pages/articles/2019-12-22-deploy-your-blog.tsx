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
        <p>I likely trying new things and prefer simple solutions in order to make support easier.</p>
        <p>In my experience, I had a chance to work with <b>React</b> and particularly <b>NextJs</b>.
          I like those tools and happy with them. I really like the idea to have single page application and get rid of annoying loaders. actually, what I like more it's a code splitting feature.
          Next.js does automatic code splitting and it is based on the pages in your app. And it's mostly all I want</p>
        <p>If you have found 1 million ways how deploy/manage you blog it wouldn't be enough, there is one more way to do it. Here is one of those ways.</p>

        <h2>Expectations</h2>
        <p>As I sad before, there is few points should have done to make blog easy to maintain and flexible to changes</p>
        <ul>
          <li>Code as source of truth</li>
          <li>Single page application</li>
          <li>Server side rendering</li>
          <li>Code splitting</li>
          <li>Easy deployment</li>
        </ul>
      </div>

    </ArticlePage>
  </Layout >
);

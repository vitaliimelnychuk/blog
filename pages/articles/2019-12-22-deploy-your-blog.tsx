import articles from '../../content/articles'

import Layout from '../../components/Layout'
import ArticlePage from '../../components/layouts/ArticlePage'
import Highlight from '../../components/Highlight'

const article = articles['2019-12-22-deploy-your-blog']

const editorconfig = `
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

# Set default charset
charset = utf-8

# Set indentation
indent_style = space
indent_size = 2
`;
export default () => (
  <Layout >
    <ArticlePage {...article}>
      <div>
        <p>You cannot be sure when it is a right time to start your blog.
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
        <h3>Starting from code</h3>
        <p>
          I am one of engineers who just like writing the code.
          Let's be short and start from React, Next.js.
        </p>
        <p>
          If you are new in this stack, here is <a href="https://github.com/zeit/next.js/#quick-start" target="blank">quick start guide</a>.
        </p>
        <p>
          The same as for all projects you are working on, to have only core library wouldn't be enough for comfortable development.
          There are a lot of useful things such as linting, formatting, testing, logging, error tracking. Those are essential ones. At least we have to think about them.
        </p>
        <p>
          Speaking about blog development. It's okay to skip unit tests, logging and error tracking.
          I think about them as more production solutions.
          We definitely need them in our more complex apps where it's so important to have knowledge of users, database operations, payments and so on.
        </p>
        <p>
          I've spend some time to define some linting/formatting rules to have style consistency.
          The first one, you definitely need in every project is <a href="https://editorconfig.org/"> editorconfig</a>. Here is the one, I am using for my blog
        </p>
        <Highlight className="INI" file=".editorconfig" title="Editorconfig configuration example">{editorconfig}</Highlight>
      </div>

    </ArticlePage>
  </Layout >
);

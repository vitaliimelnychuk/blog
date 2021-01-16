import articles from '../../content/articles'

import Layout from '../../components/Layout'
import ArticlePage from '../../components/layouts/ArticlePage'
import Highlight from '../../components/Highlight'
import ExternalLink from '../../components/ExternalLink'

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
`

const prismjs = `
import React, { PureComponent } from "react"

import { PropTypes } from "prop-types"

export default class PrismCode extends PureComponent {
  static propTypes = {
    async: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
    component: PropTypes.node,
  }

  static defaultProps = {
    component: \`code\`,
  }

  componentDidMount() {
    this._hightlight()
  }

  componentDidUpdate() {
    this._hightlight()
  }

  _hightlight() {
    Prism.highlightElement(this._domNode, this.props.async)
  }

  _handleRefMount = domNode => {
    this._domNode = domNode
  }

  render() {
    const { className, component: Wrapper, children } = this.props

    return (
      <Wrapper ref={this._handleRefMount} className={className}>
        {children}
      </Wrapper>
    )
  }
}
`

const DeployYourBlogArticlePage = () => (
  <Layout>
    <ArticlePage {...article}>
      <div>
        <p>
          You cannot be sure when it is a right time to start your blog. Which
          tools should be used, what kinds of articles you want to write and
          finally is it worth your time?
        </p>

        <p>
          I like blogs, especially tech blogs. They give me new ideas and
          inspiration, but at the same time they make me think: "Will I be able
          to write something like this?".
        </p>

        <p>
          However now, at the end of 2019, I'd like to present my blog and
          technologies that I've chosen to make it happen.
        </p>

        <h2>Overview</h2>
        <p>
          I am always trying to keep up with new tech solutions. My favorite
          ones are those that make our life easier.
        </p>
        <p>
          In my experience, I had a chance to work with <b>React</b> and
          particularly with <b>Next.js</b>. I really like the idea of having a
          single page application and get rid of annoying loaders. Even better
          is having SPA and code splitting feature. Next.js does automatic code
          splitting and it is based on the pages in your app. It's mostly what I
          wanted.
        </p>
        <p>
          There are millions of ways to deploy/manage your blog. In this
          article, I will tell about the one I have chosen.
        </p>

        <h2>Blog Expectations</h2>
        <p>
          As I said before, there are few points that should be done to make
          blog easy-to-maintain and flexible to changes.
        </p>
        <ul>
          <li>Code as a source of truth</li>
          <li>Single page application</li>
          <li>Server side rendering</li>
          <li>Code splitting</li>
          <li>Easy deployment</li>
        </ul>
        <h2>Starting from code</h2>
        <p>
          I'm that type of engineers who just like writing the code. In a
          nutshell, let's start from React, Next.js.
        </p>
        <p>
          If you are new in this stack, here is a{' '}
          <ExternalLink href="https://github.com/zeit/next.js/#quick-start">
            quick start guide
          </ExternalLink>
          .
        </p>
        <p>
          As for all projects you are working on, to have only one core library
          wouldn't be enough for comfortable development. There are a lot of
          useful things such as linting, formatting, testing, logging, error
          tracking. Those are essential ones. At least we have to think about
          them.
        </p>
        <p>
          Speaking about blog development, it's okay to skip unit tests, logging
          and error tracking. I consider them as more production solutions. We
          definitely need them in our more complex apps where it's so important
          to have knowledge of users, database operations, payments and so on.
        </p>
        <h3>Linting/formatting setup</h3>
        <p>
          I've spend some time to define linting/formatting rules to have style
          consistency. The first one you definitely need in every project is{' '}
          <ExternalLink href="https://editorconfig.org">
            Editorconfig
          </ExternalLink>
          . Here is the one, I am using for my blog:
        </p>
        <Highlight
          className="INI"
          file=".editorconfig"
          title="Editorconfig configuration example"
        >
          {editorconfig}
        </Highlight>
        <h3>Syntax highlighting</h3>
        <p>
          When I started development I didn't think about code highlighting.
          I've made a few commits and started writing my first article.
          Actually, it's this one. I reached linting/formatting chapter and
          needed to highlight for my `editorconfig`.
        </p>
        <p>
          I've found the most popular highlighters libraries -{' '}
          <ExternalLink href="https://highlightjs.org/">
            Highlight.js
          </ExternalLink>{' '}
          and <ExternalLink href="https://prismjs.com/">Prismjs</ExternalLink>.
          Both are great and written in JS. The next thing that came to my mind
          was "Are they compatible with React?". Yes, they are. But there are
          two different ways how they can be used.
        </p>
        <p>
          Prismjs has{' '}
          <ExternalLink href="https://github.com/tomchentw/react-prism">
            react-prism
          </ExternalLink>{' '}
          that might be helpful. Let's look how it's implemented.
        </p>
        <Highlight
          className="js"
          file="src/components/PrismCode.js"
          title="Prismjs source code"
        >
          {prismjs}
        </Highlight>
        <p>
          But how `<b>Prism</b>` property happened to be here? The answer is so
          easy - react-prism depends on the existence of <b>globals.Prism </b>
          object. Based on that, it requires to have both: `react-prism` and
          `prism` libraries the versions of which have to be managed separately.
          I didn't choose that way because I wanted something easier to maintain
          where I can simply put my library in `package.json` and use it. There
          are a lot of workarounds how you can use Prismjs with React, here is
          one of them: "
          <ExternalLink href="https://betterstack.dev/blog/code-highlighting-in-react-using-prismjs/">
            Code highlighting in React using Prism.js
          </ExternalLink>
          "
        </p>
        <p>
          It won't be fair if I don't share what I chose.{' '}
          <ExternalLink href="https://react-highlight.neostack.com/">
            React-highlight
          </ExternalLink>{' '}
          - React Component for Syntax Highlighting built on{' '}
          <ExternalLink href="https://highlightjs.org/">
            Highlight.js
          </ExternalLink>
          . The main difference here is that you simply need to install one
          library. In addition, you can choose theme from{' '}
          <ExternalLink href="https://github.com/highlightjs/highlight.js/tree/master/src/styles">
            themes folder
          </ExternalLink>
          .
        </p>
        <h3>Deployment</h3>
        <p>
          It's time to make your first deployment.{' '}
          <ExternalLink href="https://zeit.co/">Zeit</ExternalLink> is the
          easiest way to deploy your websites. There are{' '}
          <ExternalLink href="https://nextjs.now-examples.now.sh/">
            Next.js deploy examples
          </ExternalLink>{' '}
          that might have been chosen as a guide. The most important thing I
          like in this tool is an easy deployment. You just need to link Zeit
          account to your Github (or another one) repository.
        </p>

        <h2>Conclusion</h2>
        <p>
          I hope it was useful to spend a few minutes by reading it. Remember
          that there are a lot of tools, but the only thing you should pay
          attention to is combining/managing them in a right way.
        </p>
        <p>
          You always can read/follow blog code in{' '}
          <ExternalLink href="https://github.com/melnychukvitaliy/blog">
            Github
          </ExternalLink>
          .
        </p>
        <p></p>
      </div>
    </ArticlePage>
  </Layout>
)

export default DeployYourBlogArticlePage

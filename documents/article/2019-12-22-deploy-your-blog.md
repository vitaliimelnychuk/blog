---
title: How to deploy your own blog in 2019?
date: 22 Dec 2019
---

You cannot be sure when it is a right time to start your blog. Which
tools should be used, what kinds of articles you want to write and
finally is it worth your time?

I like blogs, especially tech blogs. They give me new ideas and
inspiration, but at the same time they make me think: "Will I be able
to write something like this?".

However now, at the end of 2019, I'd like to present my blog and
technologies that I've chosen to make it happen.

## Overview

I am always trying to keep up with new tech solutions. My favorite
ones are those that make our life easier.

In my experience, I had a chance to work with **React** and
particularly with **Next.js**. I really like the idea of having a
single page application and get rid of annoying loaders. Even better
is having SPA and code splitting feature. Next.js does automatic code
splitting and it is based on the pages in your app. It's mostly what I
wanted.

There are millions of ways to deploy/manage your blog. In this
article, I will tell about the one I have chosen.

## Blog Expectations

As I said before, there are few points that should be done to make
blog easy-to-maintain and flexible to changes.

- Code as a source of truth
- Single page application
- Server side rendering
- Code splitting
- Easy deployment

## Starting from code

I'm that type of engineers who just like writing the code. In a
nutshell, let's start from React, Next.js.

If you are new in this stack, here is a [quick start guide](https://github.com/zeit/next.js/#quick-start).

As for all projects you are working on, to have only one core library
wouldn't be enough for comfortable development. There are a lot of
useful things such as linting, formatting, testing, logging, error
tracking. Those are essential ones. At least we have to think about
them.

Speaking about blog development, it's okay to skip unit tests, logging
and error tracking. I consider them as more production solutions. We
definitely need them in our more complex apps where it's so important
to have knowledge of users, database operations, payments and so on.

### Linting/formatting setup

I've spend some time to define linting/formatting rules to have style
consistency. The first one you definitely need in every project is
[Editorconfig](https://editorconfig.org)
. Here is the one, I am using for my blog:

```
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
```

### Syntax highlighting

When I started development I didn't think about code highlighting.
I've made a few commits and started writing my first article.
Actually, it's this one. I reached linting/formatting chapter and
needed to highlight for my `editorconfig`.

I've found the most popular highlighters libraries -
[Highlight.js](https://highlightjs.org/) and [Prismjs](https://prismjs.com/).

Both are great and written in JS. The next thing that came to my mind
was "Are they compatible with React?". Yes, they are. But there are
two different ways how they can be used.

Prismjs has [react-prism](https://github.com/tomchentw/react-prism)
that might be helpful. Let's look how it's implemented.

```js
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
```

But how **Prism** property happened to be here? The answer is so
easy - react-prism depends on the existence of **globals.Prism **
object. Based on that, it requires to have both: `react-prism` and
`prism` libraries the versions of which have to be managed separately.
I didn't choose that way because I wanted something easier to maintain
where I can simply put my library in `package.json` and use it. There
are a lot of workarounds how you can use Prismjs with React, here is
one of them: "
[Code highlighting in React using Prism.js](https://betterstack.dev/blog/code-highlighting-in-react-using-prismjs)

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

  ### Deployment

It's time to make your first deployment.{' '}
<ExternalLink href="https://zeit.co/">Zeit</ExternalLink> is the
easiest way to deploy your websites. There are{' '}
<ExternalLink href="https://nextjs.now-examples.now.sh/">
Next.js deploy examples
</ExternalLink>{' '}
that might have been chosen as a guide. The most important thing I
like in this tool is an easy deployment. You just need to link Zeit
account to your Github (or another one) repository.

## Conclusion

I hope it was useful to spend a few minutes by reading it. Remember
that there are a lot of tools, but the only thing you should pay
attention to is combining/managing them in a right way.

You always can read/follow blog code in{' '}
<ExternalLink href="https://github.com/melnychukvitaliy/blog">
Github
</ExternalLink>
.

      </div>

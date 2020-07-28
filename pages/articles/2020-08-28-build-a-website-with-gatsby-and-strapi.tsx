import articles from '../../content/articles'

import Layout from '../../components/Layout'
import ArticlePage from '../../components/layouts/ArticlePage'
import Highlight from '../../components/Highlight'
import ExternalLink from '../../components/ExternalLink'

const article = articles['2020-08-28-build-a-website-with-gatsby-and-strapi']

const deployYourBlogArticle = articles['2019-12-22-deploy-your-blog']

export default () => (
  <Layout>
    <ArticlePage {...article} >
      <>
        <p>I am so thrilled to start writing about projects infrastractore especially released ones.</p>

        <h2>It's not about documentation</h2>
        I wouldn't explore things that already great described in official documentation <ExternalLink href="https://www.gatsbyjs.org/docs/"><b>Gatsby</b></ExternalLink> and <ExternalLink href="https://strapi.io/documentation"><b>Strapi</b></ExternalLink>.
        If you are interesting in specific feature - look there and get the topic you want.

        <h2>Resourses</h2>
        Before we go futher - check out usefull atricles/docs I've read before.
        <ul>
          <li><ExternalLink href="https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi">Build a static blog with Gatsby and Strapi</ExternalLink></li>
          <li><ExternalLink href="https://www.gatsbyjs.org/docs/graphql/">GraphQL & Gatsby</ExternalLink></li>
          <li><ExternalLink href="https://www.gatsbyjs.org/tutorial/part-four/#data-in-gatsby">Data in Gatsby</ExternalLink></li>
          <li><ExternalLink href="https://www.gatsbyjs.org/packages/gatsby-image/">gatsby-image</ExternalLink></li>
          <li><ExternalLink href="https://strapi.io/documentation/3.0.0-beta.x/plugins/upload.html">Strapi Upload</ExternalLink></li>
        </ul>

        If you familiar with core concept, you can skip them and start with connecting things together.

        <h2>What is Strapi?</h2>
        <p>Strapi is <b>open-source</b>, content based Headless CMS. I've intentionally highlighted 'open-source' because it's really important - it takes Strapi into the new level and changing your mind about CMS (if it didn't - you definetely have to take a look and try to use next-gen headless CMS!) </p>
        <p>To describe overall <b>Strapi core components</b> and basically core Headless CMS concept I've got the next schema</p>
        <img src="/static/img/articles/2020-08-28/strapi-components.jpg" width="75%" />
        <p>As you can see, we have admin, and API where everything happens. The idea is to split up your data management and presentation level (Gatsby has taken this part). </p>
        <h2>Gatsby + Strapi are so powerfull together</h2>
        <p>
          Previously, mostly one year ago I've started my first article and make this blog happen. I've started with article <ExternalLink href={deployYourBlogArticle.url}><b>{deployYourBlogArticle.title}</b></ExternalLink> - it's pretty and simple. But it sort of different than working with Gatsby.
The main difference here - you have <b>Headless CMS</b> that manages your data rather than you have to store data as code. It brings your some level of complexity where you have to manage your infrastracture (Host Strapi, database and their availability)
        </p>

        <h2>Infrastructure setup</h2>
        <p>Developing infrastracture is not less important point than chose your frameworks. In this guide we are going to use <b>AWS services</b>.
        It always hard for me to chose level of complexity we need for specific project. It's not a case to use Docker everywhere or deploy everything to k8s.
        </p>
        <p>
          To spead up things and make developers support as easy as possible we have chosen to start without auto-deployments and build all infrastracture based on <ExternalLink href="https://aws.amazon.com/ec2/"><b>AWS EC2</b></ExternalLink> and  <ExternalLink href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html"><b>AWS Application Load Balancer</b></ExternalLink> to have internet-facing traffic
        </p>
        <p>Eventually, we get following structure for Strapi setup:</p>
        <style jsx>{`
            img {
              display: block;
              margin: 30px auto;
            }
          `}</style>
      </>
    </ArticlePage>
  </Layout >
);

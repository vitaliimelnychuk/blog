import articles from '../../content/articles'

import Layout from '../../components/Layout'
import ArticlePage from '../../components/layouts/ArticlePage'
import Highlight from '../../components/Highlight'
import ExternalLink from '../../components/ExternalLink'

const article = articles['2020-08-28-build-a-website-with-gatsby-and-strapi']
const deployYourBlogArticle = articles['2019-12-22-deploy-your-blog']

const webhooksScript = `
const http = require("http");
const exec = require("child_process").exec;

const STRAPI_WEBHOOK_AUTH_TOKEN = process.env.STRAPI_WEBHOOK_AUTH_TOKEN;

let isActiveDeployment = false;

const getAuthToken = (authHeader) => {
  if (authHeader.startsWith("Bearer ")) {
    return authHeader.substring(7, authHeader.length);
  }

  return null;
};

http
  .createServer(function (req, res) {
    req.on("data", function (chunk) {
      if (isActiveDeployment) {
        res.writeHead(400, { "Content-Type": "plain/text" });
        res.write("Deployment is in progress");
        res.end();
        return;
      }

      const token = getAuthToken(req.headers.authorization);
      if (token === STRAPI_WEBHOOK_AUTH_TOKEN) {
        res.end();
        isActiveDeployment = true;
        // You might use any other tool to run deploy script (yarn, npm, bash, ...)
        exec(\`cd ~/your-frontend-code && make deploy-frontend\`, (error, stdout, stderr) => {
          if (error) {
            console.error(\`exec error: \${error}\`);
            return;
          }
          console.log(\`stdout: \${stdout}\`);
          console.log(\`stderr: \${stderr}\`);
          isActiveDeployment = false;
        });
      } else {
  res.writeHead(401, { "Content-Type": "application/json" });
  res.end();
}
    });
  })
  .listen(8080);

`
const BuuldGatsbyAndStrapiArticlePage = () => (
  <Layout>
    <ArticlePage {...article}>
      <>
        <p>
          I am so thrilled to write about projects infrastructure, especially
          about released ones.
        </p>

        <h2>It's not about documentation</h2>
        <p>
          I won't explain things that are already great described in official
          documentation{' '}
          <ExternalLink href="https://www.gatsbyjs.org/docs/">
            <b>Gatsby</b>
          </ExternalLink>{' '}
          and{' '}
          <ExternalLink href="https://strapi.io/documentation">
            <b>Strapi</b>
          </ExternalLink>
          . If you are interested in specific feature - look there and get the
          topic you want.
        </p>

        <h2>Resourses</h2>
        <p>
          Before we go futher - check usefull atricles/docs I've read before.
        </p>
        <ul>
          <li>
            <ExternalLink href="https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi">
              Build a static blog with Gatsby and Strapi
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.gatsbyjs.org/docs/graphql/">
              GraphQL & Gatsby
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.gatsbyjs.org/tutorial/part-four/#data-in-gatsby">
              Data in Gatsby
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.gatsbyjs.org/packages/gatsby-image/">
              gatsby-image
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://strapi.io/documentation/3.0.0-beta.x/plugins/upload.html">
              Strapi Upload
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://strapi.io/blog/webhooks">
              Strapi Webhooks
            </ExternalLink>
          </li>
        </ul>

        <p>
          If you are familiar with core concept, you can skip them and start
          connecting things together.
        </p>

        <h2>What is Strapi?</h2>

        <p>
          Strapi is <b>open-source</b>, content based Headless CMS. I've
          intentionally highlighted 'open-source' because it's really important
          - it takes Strapi into the new level and changes your mind about CMS
          (if it didn't - you definetely have to take a look and try to use
          next-gen headless CMS!)
        </p>
        <p>
          To describe overall <b>Strapi core components</b> and basically core
          Headless CMS concept I've got the next scheme:
        </p>
        <img
          src="/static/img/articles/2020-08-28/strapi-components.jpg"
          width="75%"
        />
        <p>
          As you can see, we have admin and API where everything happens. The
          idea is to split up your data management and presentation level
          (Gatsby has taken this part).
        </p>

        <h2>Gatsby + Strapi are so powerful together</h2>
        <p>
          Previously, one year ago I've started my first article and made this
          blog happen. I've started with article{' '}
          <ExternalLink href={deployYourBlogArticle.url}>
            <b>{deployYourBlogArticle.title}</b>
          </ExternalLink>{' '}
          - it's pretty and simple. But it sort of different than working with
          Gatsby. The main difference here - you have <b>Headless CMS</b> that
          manages your data rather than you have to store data as code. It
          brings you some level of complexity where you have to manage your
          infrastracture (Host Strapi, database and their availability).
        </p>

        <h2>Infrastructure setup</h2>

        <p>
          Developing infrastracture is not less important than choosing your
          frameworks. In this guide we are going to use <b>AWS services</b>.
          It’s always hard for me to choose level of complexity we need for
          specific project. It's not a case to use Docker everywhere or deploy
          everything to k8s.
        </p>

        <p>
          To spead up things and make developers support it as easy as possible
          we have chosen to start without auto-deployments and build all
          infrastracture based on{' '}
          <ExternalLink href="https://aws.amazon.com/ec2/">
            <b>AWS EC2</b>
          </ExternalLink>{' '}
          and{' '}
          <ExternalLink href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html">
            <b>AWS Application Load Balancer</b>
          </ExternalLink>{' '}
          to have internet-facing traffic.
        </p>

        <p>Eventually, we got the following structure for Strapi AWS setup:</p>

        <img src="/static/img/articles/2020-08-28/aws-infra.jpg" width="75%" />

        <p>
          Speaking about Strapi part you might notice we have Application load
          balancer (ALB) at the top of all architecture. This is an important
          part even if you have only one EC2 instance for your needs. Despite
          all benefits we have by using ALB, we also get ability to use{' '}
          <ExternalLink href="https://aws.amazon.com/route53/">
            <b>AWS Route 53</b>
          </ExternalLink>{' '}
          and{' '}
          <ExternalLink href="https://aws.amazon.com/certificate-manager/">
            <b>AWS Certificate Manager</b>
          </ExternalLink>{' '}
          They both are making final part in configuring infrastracture where
          you'll be able to add own domain and use SSL (Secure Sockets Layer)
          for keeping an internet connection secure.
        </p>
        <p>
          For Gatsby hosting we have chosen{' '}
          <ExternalLink href="https://aws.amazon.com/s3/">
            <b>AWS S3 </b>
          </ExternalLink>{' '}
          +{' '}
          <ExternalLink href="https://aws.amazon.com/cloudfront/">
            <b>AWS Cloudfront</b>
          </ExternalLink>
          . This pair of services stands for storing, caching, destributing
          static files over the world and handling everything we need from
          static website hosting.
        </p>

        <h2>Triggering Gatsby build</h2>

        <p>
          Gatsby is fast and modern site generator. It's required to have a
          place where all Gatsby builds happen. Presumably, we can say there are
          two ways how frontend should be regenerated:
        </p>

        <ul>
          <li>Code changes</li>
          <li>Headless CMS data update</li>
        </ul>

        <p>
          To handle both we need to add webhook build where we will be able to
          handle both cases and run deployment command.
        </p>

        <p>
          We've decided to put it under load balancer where strapi API and Admin
          are hosted. As far as we are using{' '}
          <ExternalLink href="https://pm2.keymetrics.io/">
            <b>PM2</b>
          </ExternalLink>{' '}
          as a process manager for our Node.js applications, it'd be smart to
          add one separate application to handle all deployments. After attempt
          to visualize it I got following image:
        </p>

        <img
          src="/static/img/articles/2020-08-28/EC2-overview.jpg"
          width="40%"
        />

        <p>
          Having webhook in one of your servers is useful, you might trigger it
          rather from your CI or from{' '}
          <ExternalLink href="https://strapi.io/blog/webhooks">
            Strapi Webhooks
          </ExternalLink>
          . It brings us to the place where we just need to setup webhooks
          application to make deployment to have the full picture.
        </p>

        <h2>Webhooks handler</h2>

        <p>
          The first reason why we have chosen to develop webhooks with Node.js
          and host under PM2 - we don't need any additional proxy and increase
          level of infrastracture complexity.
        </p>

        <p>
          Here we go! In your project Strapi directory create a new folder for
          webhooks application. There is no matter what kind of deployments you
          have, eventually you'll have to ship created directory to the same
          servers where you have strapi.
        </p>

        <Highlight
          className="js"
          file="webhooks/deploy-frontend.js"
          title="Deploy fronted webhook"
        >
          {webhooksScript}
        </Highlight>
        <p>
          By going from line to line in the script above you might see that
          there is STRAPI_WEBHOOK_AUTH_TOKEN. I'd like to cover this point and
          go through Strapi setup to show how things are set there. To see all
          webhooks that are available in your strapi application go to Settings
          tab.
        </p>
        <p>
          Also you can disable some of the Strapi webhooks if you need. Read
          more{' '}
          <ExternalLink href="https://strapi.io/blog/webhooks">
            Strapi Webhooks
          </ExternalLink>{' '}
          for details.
        </p>

        <img
          src="/static/img/articles/2020-08-28/strapi-webhook.png"
          width="100%"
        />

        <p>
          To have basic level of protection we've added Basic authorixation -
          it's actually the one that was mentioned before in the webhook script.
        </p>

        <h2>Strapi Customization</h2>

        <p>
          When we started, customization was a point. We knew that adding
          payments, email notifications, etc includes a lot of custom logic and
          it should be injected somewhere.
        </p>

        <p>
          As far as Strapi is built over MVC pattern, customizing controllers is
          one of the concepts. Check out this article for more context:{' '}
          <ExternalLink href="https://strapi.io/documentation/v3.x/concepts/controllers.html#concept">
            <b>Customizing Controllers</b>
          </ExternalLink>
          . You don't need any knowledge in prior to start customizing your
          application. This is actually what I like, no 'Strapi language' that
          should be learnt.
        </p>

        <h2>Conclusion</h2>

        <p>
          Of course, having this infrastructure we are not at the end of the
          journey. Actually I need to say this is only a starting point where
          you have a lot of control on infrastructure setup and things might be
          done manually so quickly. Looking forward to the future development we
          are going to move into CI/CD deployments where everything is handled
          by CI builds and Strapi webhook handler — it's only a part of it. But
          it doesn't change a general concept where we have <b>fast</b>,{' '}
          <b>reliable</b> frontend and powerful, simple content based API.
        </p>

        <p>Happy Coding!</p>

        <style jsx>{`
          img {
            display: block;
            margin: 30px auto;
          }
        `}</style>
      </>
    </ArticlePage>
  </Layout>
)

export default BuuldGatsbyAndStrapiArticlePage

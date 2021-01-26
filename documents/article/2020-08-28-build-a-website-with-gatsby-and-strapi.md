---
title: Build a website with Gatsby and Strapi Core concepts
date: 28 Jul 2020
description:
  It's been amazing month that I've spend with new project based on Gatsby frontend and Headless CMS - Strapi.
  It would be unfair if I couldn't share all insights and results we've got from that technologies.
  Interested to build your own application and host it on AWS? Let's check before you have your own story with this amazing stack.
---

I am so thrilled to write about projects infrastructure, especially
about released ones.

## It's not about documentation

I won't explain things that are already great described in official
documentation
[**Gatsby**](https://www.gatsbyjs.org/docs)

and
[**Strapi**](https://strapi.io/documentation)

. If you are interested in specific feature - look there and get the
topic you want.

## Resourses

Before we go futher - check usefull atricles/docs I've read before.

- [Build a static blog with Gatsby and Strapi](https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi)
- [GraphQL & Gatsby](https://www.gatsbyjs.org/docs/graphql/)
- [Data in Gatsby](https://www.gatsbyjs.org/tutorial/part-four/#data-in-gatsby)
- [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)
- [Strapi Upload](https://strapi.io/documentation/3.0.0-beta.x/plugins/upload.html)
- [Strapi Webhooks](https://strapi.io/blog/webhooks)

If you are familiar with core concept, you can skip them and start
connecting things together.

## What is Strapi?

Strapi is **open-source**, content based Headless CMS. I've
intentionally highlighted 'open-source' because it's really important - it takes Strapi into the new level and changes your mind about CMS (if it didn't - you definetely have to take a look and try to use
next-gen headless CMS!)

To describe overall **Strapi core components** and basically core
Headless CMS concept I've got the next scheme:

<img
  src="/static/img/articles/2020-08-28/strapi-components.jpg"
  width="75%"
/>

As you can see, we have admin and API where everything happens. The
idea is to split up your data management and presentation level
(Gatsby has taken this part).

## Gatsby + Strapi are so powerful together

Working with this combination is sort of different than working with just
Gatsby. The main difference here - you have **Headless CMS** that
manages your data rather than you have to store data as code. It
brings you some level of complexity where you have to manage your
infrastracture (Host Strapi, database and their availability).

## Infrastructure setup

Developing infrastracture is not less important than choosing your
frameworks. In this guide we are going to use **AWS services**.
It’s always hard for me to choose level of complexity we need for
specific project. It's not a case to use Docker everywhere or deploy
everything to k8s.

To spead up things and make developers support it as easy as possible
we have chosen to start without auto-deployments and build all
infrastracture based on [**AWS EC2**](https://aws.amazon.com/ec2/)
and [**AWS Application Load Balancer**](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html) to have internet-facing traffic.

Eventually, we got the following structure for Strapi AWS setup:

<img src="/static/img/articles/2020-08-28/aws-infra.jpg" width="75%" />

Speaking about Strapi part you might notice we have Application load
balancer (ALB) at the top of all architecture. This is an important
part even if you have only one EC2 instance for your needs. Despite
all benefits we have by using ALB, we also get ability to use
[**AWS Route 53**](https://aws.amazon.com/route53/) and
[**AWS Certificate Manager**](https://aws.amazon.com/certificate-manager/)

They both are making final part in configuring infrastracture where
you'll be able to add own domain and use SSL (Secure Sockets Layer)
for keeping an internet connection secure.

For Gatsby hosting we have chosen

- [**AWS S3**](https://aws.amazon.com/s3/)
- [**AWS Cloudfront**](https://aws.amazon.com/cloudfront/)

This pair of services stands for storing, caching, destributing
static files over the world and handling everything we need from
static website hosting.

## Triggering Gatsby build

Gatsby is fast and modern site generator. It's required to have a
place where all Gatsby builds happen. Presumably, we can say there are
two ways how frontend should be regenerated:

- Code changes
- Headless CMS data update

To handle both we need to add webhook build where we will be able to
handle both cases and run deployment command.

We've decided to put it under load balancer where strapi API and Admin
are hosted. As far as we are using [**PM2**](https://pm2.keymetrics.io/) as a process manager for our Node.js applications, it'd be smart to add one separate application to handle all deployments. After attempt
to visualize it I got following image:

<img
  src="/static/img/articles/2020-08-28/EC2-overview.jpg"
  width="40%"
/>

Having webhook in one of your servers is useful, you might trigger it
rather from your CI or from [Strapi Webhooks](https://strapi.io/blog/webhooks). It brings us to the place where we just need to setup webhooks application to make deployment to have the full picture.

## Webhooks handler

The first reason why we have chosen to develop webhooks with Node.js
and host under PM2 - we don't need any additional proxy and increase
level of infrastracture complexity.

Here we go! In your project Strapi directory create a new folder for
webhooks application. There is no matter what kind of deployments you
have, eventually you'll have to ship created directory to the same
servers where you have strapi.

```js
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

```

By going from line to line in the script above you might see that
there is STRAPI_WEBHOOK_AUTH_TOKEN. I'd like to cover this point and
go through Strapi setup to show how things are set there. To see all
webhooks that are available in your strapi application go to Settings
tab.

Also you can disable some of the Strapi webhooks if you need. Read more [Strapi Webhooks](https://strapi.io/blog/webhooks) for details.

<img
  src="/static/img/articles/2020-08-28/strapi-webhook.png"
  width="100%"
/>

To have basic level of protection we've added Basic authorixation -
it's actually the one that was mentioned before in the webhook script.

## Strapi Customization

When we started, customization was a point. We knew that adding
payments, email notifications, etc includes a lot of custom logic and
it should be injected somewhere.

As far as Strapi is built over MVC pattern, customizing controllers is
one of the concepts. Check out this article for more context:
[**Customizing Controllers**](https://strapi.io/documentation/v3.x/concepts/controllers.html#concept). You don't need any knowledge in prior to start customizing your
application. This is actually what I like, no 'Strapi language' that
should be learnt.

## Conclusion

Of course, having this infrastructure we are not at the end of the
journey. Actually I need to say this is only a starting point where
you have a lot of control on infrastructure setup and things might be
done manually so quickly. Looking forward to the future development we
are going to move into CI/CD deployments where everything is handled
by CI builds and Strapi webhook handler — it's only a part of it. But
it doesn't change a general concept where we have **fast**,
**reliable** frontend and powerful, simple content based API.

Happy Coding!

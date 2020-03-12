import articles from '../../content/articles'

import Layout from '../../components/Layout'
import ArticlePage from '../../components/layouts/ArticlePage'

const article = articles['2020-03-12-deployment-as-code']

export default () => (
  <Layout >
    <ArticlePage {...article}>
      <div>
        <p>We've started from AWS, Google Cloud instances that were provisioned manually.
        We don't even have dockerized applications. Now, we are deploying apps to Kubernetes cluster through Github and have deployment review along with deployment history.</p>

        <h2>Traffic Path & Infrastructure overview</h2>
        <p>There is no reason to describe what kind of domains we are using to handle all our traffic.
        I am going to start from our main Nginx Proxy server and how traffic ends up at that point as the first hop.</p>
      </div>
    </ArticlePage>
  </Layout >
);

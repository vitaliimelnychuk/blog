
export type Article = {
  title: string;
  url: string;
  date: Date;
}

export default {
  '2019-12-22-deploy-your-blog': {
    title: 'How to deploy your own blog in 2019?',
    date: new Date('22 Dec 2019'),
    url: '/articles/2019-12-22-deploy-your-blog'
  } as Article,
  '2020-03-12-deployment-as-code': {
    title: 'Deployment process as Code',
    date: new Date('12 Mar 2020'),
    url: '/articles/2020-03-12-deployment-as-code'
  }
}

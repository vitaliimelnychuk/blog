export type Article = {
  title: string
  url: string
  date: Date
}

export default {
  '2019-12-22-deploy-your-blog': {
    title: 'How to deploy your own blog in 2019?',
    date: new Date('22 Dec 2019'),
    url: '/articles/2019-12-22-deploy-your-blog',
  } as Article,
  '2020-08-28-build-a-website-with-gatsby-and-strapi': {
    title: 'Build a website with Gatsby and Strapi | Core concepts',
    date: new Date('28 July 2020'),
    url: '/articles/2020-08-28-build-a-website-with-gatsby-and-strapi',
  },
}


export type Article = {
  title: string;
  url: string;
  date: Date;
}

export default {
  '22-12-2019-deploy-your-blog': {
    title: 'Deploy your blog',
    date: new Date('22 Dec 2019'),
    url: '/articles/22-12-2019-deploy-your-blog'
  } as Article
}

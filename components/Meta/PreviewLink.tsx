import Head from 'next/head';

import { baseUrl, twitterProfile } from '../config'

interface IPreviewLink {
  url: string;
  title: string;
  description?: string;
  image?: string;
}

const defaultImageUrl = '/static/logo512x512.png'

export default ({ url, title, description = '', image = defaultImageUrl }: IPreviewLink) => <Head>
  <title>{title} - Vitaliy Melnychuk</title>
  <meta name='twitter:card' content='summary' />
  <meta name='twitter:site' content={`@${twitterProfile}`} />
  <meta name='twitter:creator' content={`@${twitterProfile}`} />
  <meta property='og:url' content={baseUrl + url} />
  <meta property='og:title' content={title} />
  <meta property='og:description' content={description} />
  <meta property='og:image' content={baseUrl + image} />
</Head>

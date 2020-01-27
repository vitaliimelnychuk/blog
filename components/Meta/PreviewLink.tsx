import Head from 'next/head';

import { baseUrl } from '../config'

interface IPreviewLink {
  url: string;
  title: string;
  description?: string;
  image?: string;
}

const defaultImageUrl = `${baseUrl}/static/logo512x512.png`

export default ({ url, title, description = '', image = defaultImageUrl }: IPreviewLink) => <Head>
  <meta property="og:url" content={baseUrl + url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
</Head>

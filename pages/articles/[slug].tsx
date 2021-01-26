import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import ArticleContent from '../../components/ArticleContent'

import {
  IMarkdownArticle,
  getDocumentBySlug,
  getAllDocuments,
} from '../../lib/api'

import markdownToHtml from '../../lib/markdownToHtml'

import Layout from '../../components/Layout'
import ArticlePage from '../../components/layouts/ArticlePage'

interface IArticlePageLayoutProps {
  article: IMarkdownArticle
}

interface IGetStaticProps {
  params: {
    slug: string
  }
}

interface IGetStaticPropsResponse {
  props: IArticlePageLayoutProps
}

interface IGetStaticPathsResponse {
  paths: IGetStaticProps[]
  fallback: boolean
}

const IArticlePageLayout: React.FC<IArticlePageLayoutProps> = ({ article }) => {
  const router = useRouter()

  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <ArticlePage {...article} date={article.date}>
        <ArticleContent content={article.content} />
      </ArticlePage>
    </Layout>
  )
}

export async function getStaticProps({
  params,
}: IGetStaticProps): Promise<IGetStaticPropsResponse> {
  const article = getDocumentBySlug<IMarkdownArticle>('article', params.slug)
  const content = await markdownToHtml(article.content)

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  }
}

export async function getStaticPaths(): Promise<IGetStaticPathsResponse> {
  const articles = getAllDocuments('article')

  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default IArticlePageLayout

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

const IArticlePageLayout = ({ article }: IArticlePageLayoutProps) => {
  const router = useRouter()

  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }

  // TODO: pass the same date as we have in Readme file
  return (
    <Layout>
      <ArticlePage {...article} date={article.date}>
        <ArticleContent content={article.content} />
      </ArticlePage>
    </Layout>
  )
}

export async function getStaticProps({ params }: IGetStaticProps) {
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

export async function getStaticPaths() {
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

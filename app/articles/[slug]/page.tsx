import { notFound } from 'next/navigation'

import { getArticleBySlug, getAllArticles } from '../../../src/lib/markdown'
import { Container } from '../../../src/components/Container'
type ArticleSinglePageProps = {
  params: {
    slug: string
  }
}

function formatDate(date: Date) {
  return date.toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

async function ArticleSinglePage({ params }: ArticleSinglePageProps) {
  const article = await getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {article.meta.title}
                </h1>
                <time
                  dateTime={article.meta.date.toDateString()}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(article.meta.date)}</span>
                </time>
              </header>
              <div className="prose dark:prose-invert mt-8">
                {article.content}
              </div>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}


export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default ArticleSinglePage

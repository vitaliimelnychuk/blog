import { Container } from '../../src/components/Container'

import { getAllArticles, ArticleMarkdownItem } from '../../src/lib/markdown'

import { ArticleCardTitle } from '../../src/components/ArticleCardTitle'
import ReadArticle from '../../src/components/ReadArticle'
import Eyebrow from '../../src/components/Eyebrow'

export function ArticleCard({ article }: { article: ArticleMarkdownItem }) {
  return (
    <article className="group relative items-start md:grid md:grid-cols-4 md:items-baseline">
      <>
        <Eyebrow date={article.meta.date} border={false} />
        <div className="md:col-span-3 md:grid">
          <ArticleCardTitle url={article.url} title={article.meta.title} />

          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {article.meta.description}
          </p>
          <ReadArticle />
        </div>
      </>
    </article>
  )
}

export default async function ArticlesPage() {
  const articles = await getAllArticles()

  return (
    <Container className="mt-24 md:mt-28">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Writing on software design, company building, and more.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

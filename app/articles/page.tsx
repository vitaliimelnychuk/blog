import { Container } from '../../src/components/Container'
import { ArticleCard } from '../../src/components/ArticleCard'

import { getAllArticles } from '../../src/lib/markdown'

export default async function HomePage() {
  const articles = await getAllArticles()

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Writing on software design, company building, and the aerospace
            industry.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            All of my long-form thoughts on programming, leadership, product
            design, and more, collected in chronological order.
          </p>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

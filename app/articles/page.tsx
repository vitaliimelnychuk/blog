import { Container } from '../../src/components/Container'
import { ArticleCard } from '../../src/components/ArticleCard'

import { getAllArticles } from '../../src/lib/markdown'

export default async function HomePage() {
  const articles = await getAllArticles()

  return (
    <Container className="mt-24 md:mt-28">
      <div className="mx-auto">
        <div className="flex flex-col gap-16">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </Container>
  )
}

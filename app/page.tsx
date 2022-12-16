import { Container } from '../src/components/Container'
import { ArticleCard } from '../src/components/ArticleCard'
import Resume from '../src/components/Resume'

import {
  LinkedInIcon,
  TwitterIcon,
  GitHubIcon,
} from '../src/components/SocialIcons'
import { getAllDocuments, IMarkdownArticle } from '../lib/api'

export default function HomePage() {
  const articles = getAllDocuments<IMarkdownArticle>('article')

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, builder, and amateur runner.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Vitalii, a software engineer based in Porto, Portugal. I
            occasinally build new stuff and share my learnings here.
          </p>
          <div className="mt-6 flex gap-6">
            <LinkedInIcon />
            <TwitterIcon />
            <GitHubIcon />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

import { ArticleMarkdownItem } from '../lib/markdown'
import { formatDate } from '../lib/date'
import { ArticleCardTitle } from './ArticleCardTitle'
import { ChevronRightIcon } from './Icons'

function Eyebrow({ date }: { date: Date }) {
  return (
    <time className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500">
      <span
        className="absolute inset-y-0 left-0 flex items-center"
        aria-hidden="true"
      >
        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
      </span>
      {formatDate(date)}
    </time>
  )
}

export function ArticleCard({ article }: { article: ArticleMarkdownItem }) {
  return (
    <article className="group relative flex flex-col items-start">
      <>
        <ArticleCardTitle url={article.url} title={article.meta.title} />
        <Eyebrow date={article.meta.date} />
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {article.meta.description}
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
          Read article
          <ChevronRightIcon />
        </div>
      </>
    </article>
  )
}

export default ArticleCard

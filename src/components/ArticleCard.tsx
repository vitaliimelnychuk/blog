import { ArticleMarkdownItem } from '../lib/markdown'

import { ArticleCardTitle } from './ArticleCardTitle'
import ReadArticle from './ReadArticle'
import Eyebrow from './Eyebrow'

export function ArticleCard({ article }: { article: ArticleMarkdownItem }) {
  return (
    <article className="group relative flex flex-col items-start">
      <>
        <ArticleCardTitle url={article.url} title={article.meta.title} />
        <Eyebrow date={article.meta.date} />
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {article.meta.description}
        </p>
        <ReadArticle />
      </>
    </article>
  )
}

export default ArticleCard

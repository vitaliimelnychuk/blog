'use client'
import Link from 'next/link'

type ArticleCardTitleProps = {
  url: string
  title: string
}

export function ArticleCardTitle({ url, title }: ArticleCardTitleProps) {
  return (
    <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      <>
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
        <Link href={url}>
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">{title}</span>
        </Link>
      </>
    </h2>
  )
}

export default ArticleCardTitle

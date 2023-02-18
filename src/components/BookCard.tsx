import Image, { StaticImageData } from 'next/image'
import { ChevronRightIcon } from './Icons'
import { formatDate } from '../lib/date'

export type BookItem = {
  title: string
  author: string
  imageSrc: StaticImageData
  description: string
  amazonUrl: string
  date: Date
}

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

export function BookCard({ book }: { book: BookItem }) {
  return (
    <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="grid max-w-3xl grid-cols-1 gap-y-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src={book.imageSrc}
            alt={book.description}
            width={120}
            className="inline"
          />
        </div>
        <div className="md:col-span-3">
          <>
            <Eyebrow date={book.date} />
            <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              {book.author} :: {book.title}
            </h2>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {book.description}
            </p>
            <a
              href={book.amazonUrl}
              rel="noreferrer"
              target="_blank"
              aria-hidden="true"
              className="mt-4 flex items-center text-sm font-medium text-teal-500"
            >
              Open in Amazon
              <ChevronRightIcon />
            </a>
          </>
        </div>
      </div>
    </section>
  )
}

export default BookCard

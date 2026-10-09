import { Container } from '../../src/components/Container'
import BookCard from '../../src/components/BookCard'
import { books } from '../../content/books'

export default async function RecommendationsPage() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Recommendations
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Engineering books I recommend, with a short note on why each one is
            worth your time.
          </p>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="flex flex-col gap-16">
          {books.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      </Container>
    </>
  )
}

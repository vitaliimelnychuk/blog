import { Container } from '../../src/components/Container'
import BookCard from '../../src/components/BookCard'
import { books } from '../../content/books'

export default async function BooksPage() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Reading occasinally while traveling and not working
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            You can find my book recommendations with short descriptions below.
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

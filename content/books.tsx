import { ReactChild } from 'react'
import ExternalLink from '../components/ExternalLink'

export type TBook = {
  title: string
  description: ReactChild
  author: string
  url: string
  slug: string
  date: Date
  img: string
}

export const books = {
  'black-holes-and-baby-universes-and-other-essays': {
    title: 'Black Holes and Baby Universes and Other Essays',
    description: (
      <div>
        <p>
          I&apos;ve spent a lot of evenings by watching{' '}
          <ExternalLink href="https://g.co/kgs/8KYwTx">
            The Big Bang Theory
          </ExternalLink>{' '}
          This book reminds me all Sheldon&apos;s jokes around{' '}
          <ExternalLink href="https://g.co/kgs/2FPPsH">
            String theory
          </ExternalLink>
          .
        </p>
      </div>
    ),
    author: 'Stephen Hawking',
    date: new Date('24 Mar 2020'),
    url:
      'https://www.amazon.com/Black-Holes-Universes-Other-Essays-ebook/dp/B004JHYRXQ',
    img: '/static/books/black-holes-and-baby-universes-and-other-essays.jpg',
    slug: '/books/black-holes-and-baby-universes-and-other-essays',
  } as TBook,
  'the-illustrated-theory-of-everything': {
    title: 'The Illustrated Theory of Everything',
    description: (
      <div>
        <b>Do you know your place in Universe?</b> You definitely will make big
        step in understanding theory of relativity, black holes, quantum theory
        and timing.
        <p>
          Special thanks for inspiring, amazing images provided by{' '}
          <ExternalLink href="https://apod.nasa.gov">Nasa</ExternalLink>:
        </p>
        <ul>
          <li>
            <ExternalLink href="https://apod.nasa.gov/apod/ap000107.html">
              NGC 4214: Star Forming Galaxy
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://apod.nasa.gov/apod/ap171028.html">
              NGC 6369: The Little Ghost Nebula
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://apod.nasa.gov/apod/ap990707.html">
              M80: A Dense Globular Cluster
            </ExternalLink>
          </li>
        </ul>
      </div>
    ),
    author: 'Stephen Hawking',
    date: new Date('25 Jan 2020'),
    url:
      'https://www.amazon.com/Illustrated-Theory-Everything-Universe-2003-10-24-dp-B01NH01CUL/dp/B01NH01CUL',
    img: '/static/books/the-illustrated-theory-of-everything.jpg',
    slug: '/books/the-illustrated-theory-of-everything',
  } as TBook,
  'the-subtle-art-of-not-giving-a-f*ck': {
    title: 'The subtle Art of Not Giving a F*ck',
    description: (
      <div>
        I like how enjoyable this book is. Sometimes, we just need to look
        around and enjoy what we have done and what&apos;s going to happened.
        <p>Enjoying your journey is much better then waiting for success.</p>
      </div>
    ),
    author: 'Mark Manson',
    date: new Date('03 Jan 2020'),
    url:
      'https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713',
    img: '/static/books/the-subtle-art-of-not-giving-a-f*ck.jpg',
    slug: '/books/the-subtle-art-of-not-giving-a-f*ck',
  } as TBook,
}

export const booksList = Object.values(books)

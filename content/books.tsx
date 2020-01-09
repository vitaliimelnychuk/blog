

import { ReactChild } from 'react';

export type Book = {
  title: string;
  description: ReactChild;
  author: string;
  url: string;
  date: Date;
  img: string;
}

export default [
  {
    title: 'The subtle Art of Not Giving a F*ck',
    description: <div>
      I like how enjoyable this book is. Sometimes, we just need to look around and enjoy what we have done and what's going to be happened.
      <p>To enjoy your journey is much better then waiting for success. </p>
    </div>,
    author: 'Mark Manson',
    date: new Date('03 Jan 2020'),
    url: 'https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713',
    img: '/static/books/the-subtle-art-of-not-giving-a-f*ck.jpg'
  }
] as Array<Book>

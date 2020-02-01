
import { ReactChild } from 'react';

interface IBookQuotes {
  quotes: string[];
}

export default ({ quotes }: IBookQuotes) => (
  <div className="content">
    <h2>Quotes</h2>
    <ul>
      {quotes.map((quote, index) => <li key={`quote-${index}`}>{quote}</li>)}
    </ul>
  </div>
)

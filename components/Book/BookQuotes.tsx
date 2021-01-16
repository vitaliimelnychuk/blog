interface IBookQuotes {
  quotes: string[]
}

const BookQuotes = ({ quotes }: IBookQuotes) => (
  <div className="content">
    <h2>Quotes</h2>
    <ul>
      {quotes.map((quote, index) => (
        <li key={`quote-${index}`}>{quote}</li>
      ))}
    </ul>
  </div>
)

export default BookQuotes

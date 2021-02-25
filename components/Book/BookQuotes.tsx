interface IBookQuotes {
  quotes: string[]
}

const BookQuotes: React.FC<IBookQuotes> = ({ quotes }) => (
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

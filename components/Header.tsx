import Link from 'next/link'

const Header: React.FC = () => (
  <div className="container">
    <div className="name">Vitaliy Melnychuk</div>
    {/* TODO: add current page highlight */}
    <div className="links">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/books">
        <a>Books</a>
      </Link>
      <Link href="/talks">
        <a>Talks</a>
      </Link>
    </div>

    <style jsx>{`
      .container {
        font-family: 'Averia Serif Libre', cursive;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 10px;
      }
      .name {
        font-size: 34px;
        font-weight: 700;
      }
      .links {
        text-align: right;
      }
      .links a {
        font-size: 25px;
        font-weight: 400;
        padding-left: 34px;
        text-decoration: none;
      }
      .links a:hover {
        text-decoration: underline;
        text-decoration-color: #9ddadb;
        text-decoration-thickness: 3.5px;
      }
    `}</style>
  </div>
)

export default Header

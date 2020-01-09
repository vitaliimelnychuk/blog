import Link from 'next/link';

const Header = () => (
  <div className='container'>
    <div>
      <b>Vitalii Melnychuk</b> |
      <Link href="/books">
        <a>Books</a>
      </Link> |
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
    <style jsx>{`
    .container {
        display: grid;
        grid-template-columns: 1fr;
        padding: 10px;
      }
      .links a {
        font-size: 16px;
      }
      .links a:hover{
        text-decoration: underline;
      }
    `}</style>
  </div >
);

export default Header;

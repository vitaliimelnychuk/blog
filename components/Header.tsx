import Link from 'next/link';

const Header = () => (
  <div className='container'>
    <div className="logo"></div>
    <div className="links">
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
    <style jsx>{`
    .container {
        display: grid;
        grid-auto-rows: 80px;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        justify-items: center;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid black;
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

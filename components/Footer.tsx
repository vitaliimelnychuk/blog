function Footer() {
  return <div>
    <p>{new Date().getFullYear()} ©</p>
    <style jsx>{`
      p {
        text-align:right;
      }
    `}</style>
  </div>;
}

export default Footer;

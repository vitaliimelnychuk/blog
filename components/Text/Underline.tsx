const Underline: React.FC = ({ children }) => {
  return (
    <>
      <span className="underline">{children}</span>

      <style jsx>{`
        .underline {
          text-decoration: underline;
          text-underline-position: under;
          text-underline-offset: 3px;
          text-decoration-color: #9ddadb;
          text-decoration-thickness: 3.5px;
        }
      `}</style>
    </>
  )
}

export default Underline

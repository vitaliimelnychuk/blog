import { ReactChild } from 'react'

interface IButtonProps {
  children: ReactChild
}

const Button = ({ children }: IButtonProps) => {
  return (
    <button>
      {children}
      <style jsx>{`
        button {
          text-align: center;
          padding: 10px 50px;
          border: 1px solid black;
          background-color: #fff;
          width: 170px;
          margin: 5px;
        }
        button:hover {
          cursor: pointer;
          color: #fff;
          background-color: #000;
        }
      `}</style>
    </button>
  )
}

export default Button

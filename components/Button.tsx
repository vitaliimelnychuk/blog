import { ReactChild } from 'react';

interface IButtonProps {
  children: ReactChild;
}

function Button({ children }: IButtonProps) {
  return <button>
    {children}
    <style jsx>{`
    button {
        display: block;
        text-align: center;
        padding: 10px 50px;
        border: 1px solid black;
      }
      button:hover {
        cursor:pointer;
        color: #fff;
        background-color:#000;
      }
    `}</style>
  </button>;
}

export default Button;

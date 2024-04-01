import React from 'react';
import './style.css';
interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className='btn'>
      {children}
    </button>
  );
};

export default Button;

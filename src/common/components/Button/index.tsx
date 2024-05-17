import React from 'react';

import './assets/index.scss';

interface ButtonProps {
  text: string;
  className: string,
}

export const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button className={className}>{text}</button>
  );
};

import React from 'react';

import './assets/index.scss';

interface ButtonProps {
  text: string;
  styles: string,
  type?: "button" | "submit",
}

export const Button: React.FC<ButtonProps> = ({ text, styles, type = "button" }) => {
  return (
    <button type={type} className={styles}>{text}</button>
  );
};

import React from 'react';

import './assets/index.scss';

interface ButtonProps {
  children: React.ReactNode;
  styles: string,
  type?: "button" | "submit",
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, styles, type = "button", onClick }) => {
  return (
    <button type={type} className={styles} onClick={onClick}>{children}</button>
  );
};

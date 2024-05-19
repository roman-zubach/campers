import React from 'react';

import './assets/index.scss';

interface ButtonProps {
  children: React.ReactNode;
  className: string,
  type?: "button" | "submit",
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, className, type = "button", onClick, disabled }) => {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>{children}</button>
  );
};

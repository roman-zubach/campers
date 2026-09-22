import React from 'react';
import { Link } from 'react-router-dom';

import './assets/index.scss';

type BaseProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
};

type ButtonAsButton = BaseProps & {
  to?: undefined;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonAsLink = BaseProps & {
  to: string;
  target?: React.HTMLAttributeAnchorTarget;
};

type Props = ButtonAsButton | ButtonAsLink;

/** Pill button from the UI kit. Renders a router `Link` when `to` is passed. */
export const Button: React.FC<Props> = props => {
  const { children, variant = 'primary', className = '' } = props;
  const classes = `btn btn_${variant} ${className}`.trim();

  if (props.to !== undefined) {
    const { to, target } = props;
    return (
      <Link
        className={classes}
        to={to}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    );
  }

  const { type = 'button', onClick, disabled } = props;
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

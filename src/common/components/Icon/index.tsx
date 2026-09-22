import React from 'react';

import sprite from '@assets/svg/sprite.svg';

import './assets/index.scss';

type Props = {
  name: string;
  size?: number;
  className?: string;
};

/** Icon from the SVG sprite. Colored via `currentColor`. */
export const Icon: React.FC<Props> = ({ name, size = 20, className = '' }) => (
  <svg
    className={`icon ${className}`.trim()}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
  >
    <use href={`${sprite}#${name}`} />
  </svg>
);

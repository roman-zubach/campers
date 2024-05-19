import React from 'react';

import sprite from '@assets/svg/sprite.svg';

import './assets/index.scss';

type Props = {
  name: string;
  width: string;
  height: string;
  className?: string;
}

export const Icon: React.FC<Props> = ({name, width, height, className = ""}) => {
  return (
    <svg className={`icon ${className}`} width={width} height={height}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};

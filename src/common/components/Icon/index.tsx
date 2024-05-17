import React from 'react';

import sprite from '@assets/svg/sprite.svg';

type Props = {
  name: string;
  width: string;
  height: string;
}

export const Icon: React.FC<Props> = ({name, width, height}) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};

import React from 'react';

import sprite from '@assets/svg/sprite.svg';

type Props = {
  name: string;
  width: string;
  height: string;
  styles?: string;
}

export const Icon: React.FC<Props> = ({name, width, height, styles = ""}) => {
  return (
    <svg className={styles} width={width} height={height}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};

import React from 'react';

import defaultImage from './assets/default.jpg';

type Props = {
  src: string | null;
  alt: string;
  className: string,
}

export const Image: React.FC<Props> = ({src, alt, className}) => {
  return (
    <img className={className} src={src ?? defaultImage} alt={alt} />
  );
};

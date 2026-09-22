import React from 'react';

import defaultImage from './assets/default.jpg';

type Props = {
  src?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
};

export const Image: React.FC<Props> = ({
  src,
  alt,
  className,
  loading = 'lazy',
}) => (
  <img
    className={className}
    src={src || defaultImage}
    alt={alt}
    loading={loading}
  />
);

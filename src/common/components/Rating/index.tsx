import React from 'react';

import { formatLocation } from '@/common/utils/format';
import { Icon } from '../Icon';

import './assets/index.scss';

type Props = {
  rating: number;
  reviewsCount: number;
  location: string;
};

/** "★ 4.4(2 Reviews)   🗺 Kyiv, Ukraine" row used on cards and the camper page. */
export const Rating: React.FC<Props> = ({ rating, reviewsCount, location }) => (
  <div className="rating">
    <p className="rating__item">
      <Icon name="star" size={16} className="rating__star" />
      {rating}({reviewsCount} Reviews)
    </p>
    <p className="rating__item">
      <Icon name="map" size={16} />
      {formatLocation(location)}
    </p>
  </div>
);

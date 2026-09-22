import React from 'react';

import { Icon } from '../Icon';

import './assets/index.scss';

const MAX_RATING = 5;

type Props = {
  rating: number;
};

/** Five-star rating row. */
export const Stars: React.FC<Props> = ({ rating }) => (
  <div
    className="stars"
    role="img"
    aria-label={`Rating: ${rating} of ${MAX_RATING}`}
  >
    {Array.from({ length: MAX_RATING }, (_, index) => (
      <Icon
        key={index}
        name="star"
        size={16}
        className={`stars__star ${index < Math.round(rating) ? 'stars__star_active' : ''}`}
      />
    ))}
  </div>
);

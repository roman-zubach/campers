import React from 'react';

import { Rating } from '@/common/components';
import { formatPrice } from '@/common/utils/format';
import { Camper } from '@/features/camper/types';

import './assets/index.scss';

type Props = {
  camper: Camper;
};

export const CamperSummary: React.FC<Props> = ({ camper }) => {
  const { name, rating, reviews, location, price, description } = camper;

  return (
    <section className="camper_summary panel">
      <h1 className="camper_summary__name">{name}</h1>
      <Rating
        rating={rating}
        reviewsCount={reviews.length}
        location={location}
      />
      <p className="camper_summary__price">{formatPrice(price)}</p>
      <p className="camper_summary__description">{description}</p>
    </section>
  );
};

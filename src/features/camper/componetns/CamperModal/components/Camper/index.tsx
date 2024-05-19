import React from 'react';
import { Camper as CamperType } from '@/features/camper/types';
import { CamperDescription, CamperGallery, CamperHeader } from './components';

import './assets/index.scss';

type Props = {
  camper: CamperType
}

export const Camper: React.FC<Props> = ({ camper }) => {
  const { name, price, reviews, rating, location, gallery} = camper;

  return (
    <div className="camper">
      <CamperHeader
        name={name}
        price={price}
        rating={rating}
        reviewCount={reviews.length}
        location={location}
      />
      <CamperGallery images={camper.gallery} />
      <CamperDescription {...camper} />
    </div>
  );
};

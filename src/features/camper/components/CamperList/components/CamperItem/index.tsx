import React from 'react';

import { Badge, Button, Image, Rating } from '@/common/components';
import { formatPrice } from '@/common/utils/format';
import { Camper } from '@/features/camper/types';
import { getCamperCardBadges } from '@/features/camper/utils';
import { routePaths } from '@/routing/constants';
import { FavoriteButton } from '../FavoriteButton';

import './assets/index.scss';

type Props = {
  camper: Camper;
};

export const CamperItem: React.FC<Props> = ({ camper }) => {
  const { id, name, price, rating, reviews, location, description, gallery } =
    camper;

  return (
    <li className="camper_item">
      <Image className="camper_item__img" src={gallery[0]?.thumb} alt={name} />
      <div className="camper_item__body">
        <div className="camper_item__header">
          <h2 className="camper_item__name">{name}</h2>
          <div className="camper_item__price_group">
            <p className="camper_item__price">{formatPrice(price)}</p>
            <FavoriteButton camperId={id} />
          </div>
        </div>

        <Rating
          rating={rating}
          reviewsCount={reviews.length}
          location={location}
        />

        <p className="camper_item__description">{description}</p>

        <ul className="camper_item__badges">
          {getCamperCardBadges(camper).map(({ key, label, icon }) => (
            <li key={key}>
              <Badge label={label} icon={icon} />
            </li>
          ))}
        </ul>

        {/* Details open in a new browser tab (spec requirement) */}
        <Button to={routePaths.camper(id)} target="_blank">
          Show more
        </Button>
      </div>
    </li>
  );
};

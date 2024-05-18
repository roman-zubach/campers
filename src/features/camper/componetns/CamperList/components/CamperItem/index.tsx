import React from 'react';
import { Camper } from '@/features/camper/types';
import { CamperItemDetails } from '@/features/camper/componetns/CamperItemDetails';
import { Button } from '@/common/components';
import { Icon } from '@/common/components/Icon';

import './assets/index.scss';

type Props = {
  camper: Camper;
}

const CamperItem: React.FC<Props> = ({ camper }) => {
  const { name, price, location, rating, description, gallery, reviews } = camper;
  return (
    <li className="camper_item">
      <img className="camper_item__img" src={gallery[0]} alt={name} />
      <div className="camper_item__body">
        <div className="camper_item__body_header">
          <div className="camper_item__body_header_main">
            <h3>{name}</h3>
            <p>€{price}</p>
          </div>
          <div className="camper_item__body_header_additional">
            <div className="camper_item__body_header_additional_container">
              <Icon name="star" width="16" height="16" />
              <p className="camper_item__body_header_additional_review_text">
                {rating}({reviews.length} Reviews)
              </p>
            </div>
            <p className="camper_item__body_header_additional_container">
              <Icon name="map-pin" width="16" height="16" />
              {location}
            </p>
          </div>
        </div>
        <p className="camper_item__body_text">{description}</p>
        <CamperItemDetails camper={camper} fullList={false} />
        <Button text='Show more' styles='btn_main' />
      </div>
    </li>
  );
};

export default CamperItem;

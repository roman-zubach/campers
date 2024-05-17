import React from 'react';
import { Camper } from '@/features/campers/componetns/types';
import { CamperItemDetails } from '@/features/campers/componetns/CamperItemDetails';

import starSvg from '@assets/svg/star.svg';
import mapPinSvg from '@assets/svg/map-pin.svg';
import './assets/index.scss';

type Props = {
  camper: Camper;
}

export const CamperItem: React.FC<Props> = ({ camper }) => {
  const { name, price, location, rating, description, gallery, reviews } = camper;
  return (
    <div className="camper_item">
      <img className="camper_item__img" src={gallery[0]} alt={name} />
      <div className="camper_item__body">
        <div className="camper_item__body_header">
          <div className="camper_item__body_header_main">
            <p>{name}</p>
            <p>€{price}</p>
          </div>
          <div className="camper_item__body_header_additional">
            <div className="camper_item__body_header_additional_container">
              <img src={starSvg} alt="star" />
              <p className="camper_item__body_header_additional_review_text">
                {rating}({reviews.length} Reviews)
              </p>
            </div>
            <p className="camper_item__body_header_additional_container">
              <img src={mapPinSvg} alt="map-pin" />
              {location}
            </p>
          </div>
        </div>
        <p className="camper_item__body_text">{description}</p>
        <CamperItemDetails camper={camper} fullList={false} />
        <button className="btn_main">Show more</button>
      </div>
    </div>
  );
};

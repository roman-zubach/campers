import React from 'react';
import { Button, Icon } from '@/common/components';
import { useModalClose } from '@/features/camper/componetns/CamperModal/hooks/useModalClose';

import './assets/index.scss';

type Props = {
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
}

export const CamperHeader: React.FC<Props> = ({ name, rating, reviewCount, location, price }) => {
  const onClose = useModalClose();

  return (
    <div className="camper_header">
      <div className="camper_header__title">
        <p className="camper_header__title_text">{name}</p>
        <Button className="camper_header__title_close_btn" onClick={onClose}>
          <Icon className="camper_header__title_close_btn_icon" name="close" width="32" height="32" />
        </Button>
      </div>
      <div className="camper_header__content">
      <div className="camper_header__content_rating_container">
          <div className="camper_header__content_rating_container_group">
            <Icon className="camper_header__content_rating_container_group_icon" name="star" width="16" height="16" />
            <p className="camper_header__content_rating_container_group_text">
              {rating}({reviewCount} Reviews)
            </p>
          </div>
          <div className="camper_header__content_rating_container_group">
            <Icon name="map-pin" width="16" height="16" />
            {location}
          </div>
        </div>
        <p className="camper_header__content_price">€{price}</p>
      </div>
    </div>
  );
};

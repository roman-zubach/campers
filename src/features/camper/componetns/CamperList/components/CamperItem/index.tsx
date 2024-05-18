import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Camper } from '@/features/camper/types';
import { CamperItemDetails } from '@/features/camper/componetns/CamperItemDetails';
import { Button } from '@/common/components';
import { Icon } from '@/common/components/Icon';
import { FavoriteButton } from './components';
import { AppDispatch } from '@/redux/store';
import { addFavoriteAction, removeFavoriteAction } from '@/features/camper/redux/camperSlice';
import { selectIsFavorite } from '@/features/camper/redux/selectors';

import './assets/index.scss';

type Props = {
  camper: Camper;
}

export const CamperItem: React.FC<Props> = ({ camper }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { _id, name, price, location, rating, description, gallery, reviews } = camper;

  const isFavorite = useSelector(selectIsFavorite(_id));

  const toggleIsFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteAction(_id));
    } else {
      dispatch(addFavoriteAction(camper));
    }
  };

  return (
    <li className="camper_item">
      <img className="camper_item__img" src={gallery[0]} alt={name} />
      <div className="camper_item__body">
        <div className="camper_item__body_header">
          <div className="camper_item__body_header_main">
            <p className="camper_item__body_header_main_text">{name}</p>
            <div className="camper_item__body_header_main_group">
              <p>€{price}</p>
              <FavoriteButton isActive={isFavorite} onClick={toggleIsFavorite} />
            </div>
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
        <Button styles='btn_main'>Show more</Button>
      </div>
    </li>
  );
};

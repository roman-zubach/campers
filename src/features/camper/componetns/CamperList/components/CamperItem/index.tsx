import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Camper } from '@/features/camper/types';
import { CamperDetails } from '@/features/camper/componetns';
import { Button, Icon, Image, Location } from '@/common/components';
import { FavoriteButton } from './components';
import { AppDispatch } from '@/redux/store';
import { addFavoriteAction, removeFavoriteAction, setSelectCamperAction } from '@/features/camper/redux/camperSlice';
import { selectIsFavorite } from '@/features/camper/redux/selectors';

import './assets/index.scss';

type Props = {
  camper: Camper;
}

export const CamperItem: React.FC<Props> = ({ camper }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { _id, name, price, location, rating, description, gallery, reviews, adults, details } = camper;

  const isFavorite = useSelector(selectIsFavorite(_id));

  const toggleIsFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteAction(_id));
    } else {
      dispatch(addFavoriteAction(camper));
    }
  };

  const handleClickShowMore = () => {
    dispatch(setSelectCamperAction(camper));
  }

  return (
    <li className="camper_item">
      <Image className="camper_item__img" src={gallery[0] ?? null} alt={name} />
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
              <Icon className="camper_item__body_header_additional_container_icon" name="star" width="16" height="16" />
              <p className="camper_item__body_header_additional_review_text">
                {rating}({reviews.length} Reviews)
              </p>
            </div>
            <Location name={location} className="camper_item__body_header_additional_container" />
          </div>
        </div>
        <p className="camper_item__body_text">{description}</p>
        <CamperDetails adults={adults} details={details} fullList={false} />
        <Button className='btn_main' onClick={handleClickShowMore}>Show more</Button>
      </div>
    </li>
  );
};

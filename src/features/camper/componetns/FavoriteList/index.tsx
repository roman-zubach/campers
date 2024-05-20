import React from 'react';
import { useSelector } from 'react-redux';

import { NotFoundMessage } from '@/common/components';
import { selectFavoriteCampers } from '@/features/camper/redux/selectors';
import { CamperModal } from '@/features/camper/componetns';
import { CamperItem } from '@/features/camper/componetns/CamperList/components';

import './assets/index.scss';

export const FavoriteList: React.FC = () => {
  const campers = useSelector(selectFavoriteCampers);

  return (
    <div className="favorite_list">
      <ul className="favorite_list__items">
        {campers.length > 0 ? (
          campers.map((camper) => (
            <CamperItem camper={camper} key={camper._id} />
          ))
        ) : (
          <NotFoundMessage />
        )}
      </ul>
      <CamperModal />
    </div>
  );
};

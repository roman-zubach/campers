import React from 'react';
import { FavoriteList } from '@/features/camper/componetns';
import { BookedCamperList } from '@/features/booking/components';

import './assets/index.scss';

const FavoritePage: React.FC = () => {
  return (
    <div className="favorite_page">
      <BookedCamperList />
      <FavoriteList />
    </div>
  );
};

export default FavoritePage;

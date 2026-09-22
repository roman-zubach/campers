import React from 'react';

import { Icon } from '@/common/components';
import { toggleFavorite } from '@/features/camper/redux/camperSlice';
import { selectIsFavorite } from '@/features/camper/redux/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import './assets/index.scss';

type Props = {
  camperId: string;
};

export const FavoriteButton: React.FC<Props> = ({ camperId }) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector(state => selectIsFavorite(state, camperId));

  return (
    <button
      type="button"
      className={`favorite_button ${isFavorite ? 'favorite_button_active' : ''}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={isFavorite}
      onClick={() => dispatch(toggleFavorite(camperId))}
    >
      <Icon name="heart" size={24} className="favorite_button__icon" />
    </button>
  );
};

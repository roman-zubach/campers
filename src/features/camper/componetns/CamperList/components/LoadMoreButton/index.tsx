import React from 'react';
import { Button } from '@/common/components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { increasePageAction } from '@/features/camper/redux/camperSlice';
import { selectCanLoadMore } from '@/features/camper/redux/selectors';

import './assets/index.scss';

export const LoadMoreButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const canLoadMore = useSelector(selectCanLoadMore);

  const handleClick = () => {
    dispatch(increasePageAction());
  };

  return (
    <div className="load_more_btn_container">
      { canLoadMore && <Button className="btn_secondary" onClick={handleClick}>Load more</Button> }
    </div>
  );
};

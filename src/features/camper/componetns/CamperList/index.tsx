import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CamperItem from '@/features/camper/componetns/CamperList/CamperItem';
import { selectCampers, selectError, selectIsLoading } from '@/features/camper/redux/selectors';
import { fetchCampers } from '@/features/camper/redux/operations';
import { AppDispatch } from '@/redux/store';
import { Loader } from '@/common/components';

import './assets/index.scss';

export const CamperList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className="camper_list">
      {isLoading && <Loader />}
      {error && <p>error</p>}
      {campers.length && campers.map((camper) => <CamperItem camper={camper} key={camper._id} />)}
    </div>
  );
};

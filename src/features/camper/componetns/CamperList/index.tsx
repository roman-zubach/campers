import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/redux/store';
import { fetchCampers } from '@/features/camper/redux/operations';
import { Loader } from '@/common/components';
import CamperItem from './components/CamperItem';
import { selectError, selectFilteredContacts, selectIsLoading } from '@/features/camper/redux/selectors';

import './assets/index.scss';

export const CamperList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const campers = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <ul className="camper_list">
      {isLoading && <Loader />}
      {error && <p>error</p>}
      {campers.length && campers.map((camper) => <CamperItem camper={camper} key={camper._id} />)}
    </ul>
  );
};

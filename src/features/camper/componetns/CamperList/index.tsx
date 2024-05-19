import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/redux/store';
import { fetchCampers } from '@/features/camper/redux/operations';
import { Loader, ErrorMessage, NotFoundMessage } from '@/common/components';
import { CamperItem, LoadMoreButton } from './components';
import {
  selectError,
  selectIsLoading,
  selectPaginatedCampers,
} from '@/features/camper/redux/selectors';

import './assets/index.scss';
import { CamperModal } from '@/features/camper/componetns';

export const CamperList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const campers = useSelector(selectPaginatedCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className="camper_list">
      {isLoading && <Loader />}
      {error ? (
        <ErrorMessage />
      ) : (
        <>
          <ul className="camper_list__items">
            {campers.length > 0 ? (
              campers.map((camper) => (
                <CamperItem camper={camper} key={camper._id} />
              ))
            ) : (
              <NotFoundMessage />
            )}
          </ul>
          <LoadMoreButton />
          <CamperModal />
        </>
      )}
    </div>
  );
};

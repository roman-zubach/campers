import React, { useEffect } from 'react';

import { Button, ErrorMessage, Loader } from '@/common/components';
import { fetchCampers } from '@/features/camper/redux/operations';
import {
  selectCampers,
  selectCanLoadMore,
  selectError,
  selectHasRequested,
  selectIsLoading,
  selectPage,
} from '@/features/camper/redux/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { CamperItem, CamperListEmpty } from './components';

import './assets/index.scss';

export const CamperList: React.FC = () => {
  const dispatch = useAppDispatch();

  const campers = useAppSelector(selectCampers);
  const page = useAppSelector(selectPage);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const canLoadMore = useAppSelector(selectCanLoadMore);
  const hasRequested = useAppSelector(selectHasRequested);

  useEffect(() => {
    dispatch(fetchCampers(1));
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchCampers(page + 1));
  };

  if (error) {
    return <ErrorMessage text={error} withBackLink={false} />;
  }

  const isEmpty = hasRequested && !isLoading && campers.length === 0;

  return (
    <section className="camper_list" aria-busy={isLoading}>
      {isLoading && <Loader overlay />}

      {isEmpty ? (
        <CamperListEmpty />
      ) : (
        <ul className="camper_list__items">
          {campers.map(camper => (
            <CamperItem key={camper.id} camper={camper} />
          ))}
        </ul>
      )}

      {canLoadMore && (
        <Button
          variant="outline"
          className="camper_list__load_more"
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          Load more
        </Button>
      )}
    </section>
  );
};

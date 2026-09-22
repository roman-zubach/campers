import { useCallback } from 'react';

import { resetFilters, setFilters } from '@/features/camper/redux/camperSlice';
import { fetchCampers } from '@/features/camper/redux/operations';
import { CamperFilters } from '@/features/camper/types';
import { useAppDispatch } from '@/redux/hooks';

export const useCatalogActions = () => {
  const dispatch = useAppDispatch();

  const search = useCallback(
    (filters: CamperFilters) => {
      dispatch(setFilters(filters));
      dispatch(fetchCampers(1));
    },
    [dispatch]
  );

  const clearFilters = useCallback(() => {
    dispatch(resetFilters());
    dispatch(fetchCampers(1));
  }, [dispatch]);

  return { search, clearFilters };
};

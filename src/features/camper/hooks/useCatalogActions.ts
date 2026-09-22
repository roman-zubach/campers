import { useCallback } from 'react';

import { resetFilters, setFilters } from '@/features/camper/redux/camperSlice';
import { fetchCampers } from '@/features/camper/redux/operations';
import { CamperFilters } from '@/features/camper/types';
import { useAppDispatch } from '@/redux/hooks';

/**
 * Catalog actions shared by the filters sidebar and the empty state.
 * Changing filters clears previous results before the new request.
 */
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

import type { RootState } from '@/redux/store';

export const selectCampers = (state: RootState) => state.camper.items;
export const selectTotal = (state: RootState) => state.camper.total;
export const selectPage = (state: RootState) => state.camper.page;
export const selectFilters = (state: RootState) => state.camper.filters;
export const selectIsLoading = (state: RootState) => state.camper.isLoading;
export const selectError = (state: RootState) => state.camper.error;

export const selectCanLoadMore = (state: RootState) =>
  state.camper.items.length < state.camper.total;

export const selectIsFavorite = (state: RootState, id: string) =>
  state.camper.favorites.includes(id);

export const selectCurrentCamper = (state: RootState) => state.camper.current;
export const selectIsCurrentLoading = (state: RootState) =>
  state.camper.isCurrentLoading;
export const selectCurrentError = (state: RootState) =>
  state.camper.currentError;

export const selectHasRequested = (state: RootState) =>
  state.camper.requestId !== null;

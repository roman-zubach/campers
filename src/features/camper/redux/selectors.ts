import { RootState } from '@/redux/store';
import { createSelector } from '@reduxjs/toolkit';
import { ITEMS_PER_PAGE } from '@/features/camper/componetns/CamperList/constants';

export const selectCampers = (state: RootState) => state.camper.campers;
export const selectIsLoading = (state: RootState) => state.camper.isLoading;
export const selectError = (state: RootState) => state.camper.error;
export const selectFilters = (state: RootState) => state.camper.filters;
export const selectFavoriteCampers = (state: RootState) => state.camper.favoriteCampers;
export const selectPage = (state: RootState) => state.camper.page;
export const selectSelectedCamper = (state: RootState) => state.camper.selectedCamper;

export const selectIsFavorite = (id: string) => createSelector(
  [selectFavoriteCampers],
  (favoriteCampers) => favoriteCampers.some((camper) => camper._id === id)
);

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, {location: filterLocation, automatic, form: filterForm, kitchen, shower , tv, ac}) => {
    return campers.filter(({location, transmission, form, details}) => {
      if (filterLocation && !location.toLowerCase().includes(filterLocation.toLowerCase())) return false;
      if (automatic && transmission !== "automatic") return false;
      if (filterForm && form !== filterForm) return false;
      if (kitchen && !details.kitchen) return false;
      if (shower && (!details.shower || !details.toilet)) return false;
      if (tv && !details.TV) return false;
      if (ac && !details.airConditioner) return false;

      return true;
    });
  }
);

export const selectPaginatedCampers = createSelector(
  [selectFilteredCampers, selectPage],
  (campers, page) => campers.slice(0, page * ITEMS_PER_PAGE),
);

export const selectCanLoadMore = createSelector(
  [selectFilteredCampers, selectPage],
  (campers, page) => {
    return campers.length > page * ITEMS_PER_PAGE;
  }
)

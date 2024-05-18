import { RootState } from '@/redux/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = (state: RootState) => state.camper.items;
export const selectIsLoading = (state: RootState) => state.camper.isLoading;
export const selectError = (state: RootState) => state.camper.error;
export const selectFilters = (state: RootState) => state.camper.filters;

export const selectFilteredContacts = createSelector(
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

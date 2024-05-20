import { RootState } from '@/redux/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectBookedCampers = (state: RootState) => state.booking.campers;

export const selectSortedBookedCampers = createSelector(
  [selectBookedCampers],
  (bookedCamper) => [...bookedCamper].sort((a, b) => b.date - a.date),
);

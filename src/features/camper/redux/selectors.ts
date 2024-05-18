import { RootState } from '@/redux/store';

export const selectCampers = (state: RootState) => state.camper.items;
export const selectIsLoading = (state: RootState) => state.camper.isLoading;
export const selectError = (state: RootState) => state.camper.error;

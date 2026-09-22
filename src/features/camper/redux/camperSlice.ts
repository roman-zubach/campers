import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { INITIAL_FILTERS } from '@/features/camper/constants';
import { Camper, CamperFilters } from '@/features/camper/types';
import { fetchCamperById, fetchCampers } from './operations';

type CamperState = {
  items: Camper[];
  total: number;
  page: number;
  filters: CamperFilters;
  isLoading: boolean;
  error: string | null;
  /** Id of the latest list request — responses of outdated requests are ignored. */
  requestId: string | null;
  favorites: string[];
  current: Camper | null;
  isCurrentLoading: boolean;
  currentError: string | null;
};

const initialState: CamperState = {
  items: [],
  total: 0,
  page: 1,
  filters: INITIAL_FILTERS,
  isLoading: false,
  error: null,
  requestId: null,
  favorites: [],
  current: null,
  isCurrentLoading: false,
  currentError: null,
};

/** Drops previous search results so the list always matches the filters. */
const resetResults = (state: CamperState) => {
  state.items = [];
  state.total = 0;
  state.page = 1;
  state.error = null;
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  reducers: {
    setFilters: (state, { payload }: PayloadAction<CamperFilters>) => {
      state.filters = payload;
      resetResults(state);
    },
    resetFilters: state => {
      state.filters = INITIAL_FILTERS;
      resetResults(state);
    },
    toggleFavorite: (state, { payload }: PayloadAction<string>) => {
      state.favorites = state.favorites.includes(payload)
        ? state.favorites.filter(id => id !== payload)
        : [...state.favorites, payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, (state, { meta }) => {
        state.isLoading = true;
        state.error = null;
        state.requestId = meta.requestId;
      })
      .addCase(fetchCampers.fulfilled, (state, { payload, meta }) => {
        if (state.requestId !== meta.requestId) return;

        const page = meta.arg;
        state.items =
          page === 1 ? payload.items : [...state.items, ...payload.items];
        state.total = payload.total;
        state.page = page;
        state.isLoading = false;
      })
      .addCase(fetchCampers.rejected, (state, { payload, error, meta }) => {
        if (state.requestId !== meta.requestId) return;

        state.isLoading = false;
        state.error = payload ?? error.message ?? 'Something went wrong';
      })
      .addCase(fetchCamperById.pending, state => {
        state.current = null;
        state.isCurrentLoading = true;
        state.currentError = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        state.current = payload;
        state.isCurrentLoading = false;
      })
      .addCase(fetchCamperById.rejected, (state, { payload, error }) => {
        state.isCurrentLoading = false;
        state.currentError = payload ?? error.message ?? 'Something went wrong';
      });
  },
});

export const { setFilters, resetFilters, toggleFavorite } = camperSlice.actions;

const camperPersistConfig = {
  key: 'camper',
  storage,
  whitelist: ['favorites'],
};

export const camperReducer = persistReducer(
  camperPersistConfig,
  camperSlice.reducer
);

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { fetchCampers } from './operations';
import { Camper, CamperForm } from '@/features/camper/types';

type CamperFilerState = {
  location: string;
  ac: boolean;
  automatic: boolean;
  kitchen: boolean;
  tv: boolean;
  shower: boolean;
  form: CamperForm | "";
}

type CamperState = {
  campers: Camper[];
  favoriteCampers: Camper[];
  selectedCamper: Camper | null;
  isLoading: boolean;
  error: string | null;
  page: number;
  filters: CamperFilerState,
}

const initialState: CamperState = {
  campers: [],
  favoriteCampers: [],
  selectedCamper: null,
  isLoading: false,
  error: null,
  page: 1,
  filters: {
    location: "",
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
    form: "",
  },
};

const handlePending = (state: CamperState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: CamperState, action: PayloadAction<any>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state: CamperState) => {
  state.isLoading = false;
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  reducers: {
    updateFilterAction: (state, { payload }) => {
      state.filters = payload;
    },
    addFavoriteAction: (state, { payload }) => {
      state.favoriteCampers.push(payload);
    },
    removeFavoriteAction: (state, { payload }) => {
      state.favoriteCampers = state.favoriteCampers.filter(el => el._id !== payload);
    },
    increasePageAction: (state) => {
      state.page += 1;
    },
    setSelectCamperAction: (state, { payload }) => {
      state.selectedCamper = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action: PayloadAction<Camper[]>) => {
        state.campers = action.payload;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled);
  },
});

export const {
  updateFilterAction,
  addFavoriteAction,
  removeFavoriteAction,
  increasePageAction,
  setSelectCamperAction,
} = camperSlice.actions;

const camperConfig = {
  key: 'camper',
  storage,
  whitelist: ['favoriteCampers'],
};

export const camperReducer = persistReducer(camperConfig, camperSlice.reducer);

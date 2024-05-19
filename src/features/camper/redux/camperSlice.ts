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
  items: Camper[];
  favoriteItems: Camper[];
  isLoading: boolean;
  error: string | null;
  page: number;
  filters: CamperFilerState,
}

const initialState: CamperState = {
  items: [],
  favoriteItems: [],
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
      state.favoriteItems.push(payload);
    },
    removeFavoriteAction: (state, { payload }) => {
      state.favoriteItems = state.favoriteItems.filter(el => el._id !== payload);
    },
    increasePageAction: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action: PayloadAction<Camper[]>) => {
        state.items = action.payload;
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
} = camperSlice.actions;

const camperConfig = {
  key: 'camper',
  storage,
  whitelist: ['favoriteItems'],
};

export const camperReducer = persistReducer(camperConfig, camperSlice.reducer);

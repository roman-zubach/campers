import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  isLoading: boolean;
  error: string | null;
  filters: CamperFilerState,
}

const initialState: CamperState = {
  items: [],
  isLoading: false,
  error: null,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action: PayloadAction<Camper[]>) => {
        state.items = action.payload;
        handleFulfilled(state);
      })
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const {
  updateFilterAction,
} = camperSlice.actions;

export const camperReducer = camperSlice.reducer;

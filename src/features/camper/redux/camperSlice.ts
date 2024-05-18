import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';
import { Camper, CamperState } from '@/features/camper/types';

const initialState: CamperState = {
  items: [],
  isLoading: false,
  error: null,
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
  reducers: {},
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

export const camperReducer = camperSlice.reducer;

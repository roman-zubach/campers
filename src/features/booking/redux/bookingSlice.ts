import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { BookedCamper } from '@/features/booking/types';

type BookingState = {
  campers: BookedCamper[],
}

const initialState: BookingState = {
  campers: [],
};

type BookCamperPayload = Omit<BookedCamper, 'id'>;

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    bookCamperAction: {
      reducer: (state, action: PayloadAction<BookedCamper>) => {
        state.campers.push(action.payload);
      },
      prepare: (camper: BookCamperPayload) => {
        return {
          payload: { id: nanoid(), ...camper },
        };
      },
    },
  },
});

export const {
  bookCamperAction,
} = bookingSlice.actions;

const bookingConfig = {
  key: 'booking',
  storage,
  whitelist: ['campers'],
};

export const bookingReducer = persistReducer(bookingConfig, bookingSlice.reducer);


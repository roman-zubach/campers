import { configureStore } from '@reduxjs/toolkit';
import { camperReducer } from '@/features/camper/redux/camperSlice';

const reducer = {
  camper: camperReducer,
}

export const store = configureStore({
  reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampersApi } from '@/features/camper/api';
import { AxiosError } from 'axios';

import { Camper } from '@/features/camper/types';

export const fetchCampers = createAsyncThunk<Camper[], void, { rejectValue: string }>(
  'camper/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getCampersApi();
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

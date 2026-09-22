import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getCamperByIdApi, getCampersApi } from '@/features/camper/api';
import { Camper, CampersResponse } from '@/features/camper/types';
import type { RootState } from '@/redux/store';

const getErrorMessage = (error: unknown): string =>
  axios.isAxiosError(error) || error instanceof Error
    ? error.message
    : 'Something went wrong';

/** Loads one page of campers using the filters currently stored in state. */
export const fetchCampers = createAsyncThunk<
  CampersResponse,
  number,
  { state: RootState; rejectValue: string }
>('camper/fetchCampers', async (page, { getState, rejectWithValue }) => {
  try {
    return await getCampersApi(getState().camper.filters, page);
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

export const fetchCamperById = createAsyncThunk<
  Camper,
  string,
  { rejectValue: string }
>('camper/fetchCamperById', async (id, { rejectWithValue }) => {
  try {
    return await getCamperByIdApi(id);
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

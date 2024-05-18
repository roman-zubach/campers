import axios from 'axios';
import { CAMPERS_API_DOMAIN } from '@/features/camper/constants';
import { Camper } from '@/features/camper/types';

const instance = axios.create({
  baseURL: CAMPERS_API_DOMAIN,
});

export const getCampersApi = async (): Promise<Camper[]> => {
  const { data } = await instance.get('/campers/');

  return data;
};

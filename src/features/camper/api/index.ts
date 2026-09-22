import axios from 'axios';

import {
  API_ENGINES,
  API_FORMS,
  CAMPERS_API_DOMAIN,
  CAMPERS_PER_PAGE,
} from '@/features/camper/constants';
import {
  Camper,
  CamperFilters,
  CampersResponse,
} from '@/features/camper/types';

const instance = axios.create({
  baseURL: CAMPERS_API_DOMAIN,
});

/** Turns filter state into query params, sending only the filters that are set. */
const buildParams = (filters: CamperFilters, page: number) => {
  const params: Record<string, string | number | boolean> = {
    page,
    limit: CAMPERS_PER_PAGE,
  };

  const { location, form, engine, transmission, equipment } = filters;

  if (location.trim()) params.location = location.trim();
  if (form) params.form = form;
  if (engine) params.engine = engine;
  if (transmission) params.transmission = transmission;
  equipment.forEach(key => {
    params[key] = true;
  });

  return params;
};

export const getCampersApi = async (
  filters: CamperFilters,
  page: number
): Promise<CampersResponse> => {
  // Options from the design with no matching campers (e.g. "Electric") —
  // skip the request, the API would only answer with 404
  const { form, engine } = filters;
  if (
    (form && !API_FORMS.includes(form)) ||
    (engine && !API_ENGINES.includes(engine))
  ) {
    return { total: 0, items: [] };
  }

  try {
    const { data } = await instance.get<CampersResponse>('/campers', {
      params: buildParams(filters, page),
    });

    return data;
  } catch (error) {
    // mockapi responds with 404 when nothing matches the filters
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return { total: 0, items: [] };
    }
    throw error;
  }
};

export const getCamperByIdApi = async (id: string): Promise<Camper> => {
  const { data } = await instance.get<Camper>(`/campers/${id}`);

  return data;
};

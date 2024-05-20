import { Camper } from '@/features/camper/types';

export type BookedCamper = {
  id: string;
  camper: Camper;
  userName: string;
  email: string;
  date: number;
  comment?: string;
}

export type BookingCamperFormValues = {
  userName: string;
  email: string;
  date: Date | string;
  comment?: string;
}

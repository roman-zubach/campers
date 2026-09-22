export type CamperForm = 'alcove' | 'fullyIntegrated' | 'panelTruck';
export type CamperEngine = 'diesel' | 'petrol' | 'hybrid';
export type CamperTransmission = 'automatic' | 'manual';

export type EquipmentKey =
  | 'AC'
  | 'bathroom'
  | 'kitchen'
  | 'TV'
  | 'radio'
  | 'refrigerator'
  | 'microwave'
  | 'gas'
  | 'water';

export type GalleryImage = {
  thumb: string;
  original: string;
};

export type CamperReview = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: CamperTransmission;
  engine: CamperEngine;
  gallery: GalleryImage[];
  reviews: CamperReview[];
} & Record<EquipmentKey, boolean>;

export type CampersResponse = {
  total: number;
  items: Camper[];
};

export type CamperFilters = {
  location: string;
  form: string;
  engine: string;
  transmission: string;
  equipment: EquipmentKey[];
};

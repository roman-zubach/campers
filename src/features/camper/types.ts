export type CamperForm = "alcove" | "fullyIntegrated" | "panelTruck";
export type CamperTransmission = "manual" | "automatic";

export type Camper = {
  _id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  adults: number;
  children: number;
  engine: string;
  transmission: CamperTransmission;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  description: string;
  details: CamperDetails;
  gallery: string[];
  reviews: CamperReview[];
}

export type CamperDetails = {
  airConditioner: number;
  bathroom: number;
  kitchen: number;
  beds: number;
  TV: number;
  CD: number;
  radio: number;
  shower: number;
  toilet: number;
  freezer: number;
  hob: number;
  microwave: number;
  gas: string;
  water: string;
}

export type CamperReview = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type BookedCamper = {
  camper: Camper;
  userName: string;
  email: string;
  date: number;
  comment?: string;
}

import { CamperFilters, EquipmentKey } from './types';

export const CAMPERS_API_DOMAIN = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const CAMPERS_PER_PAGE = 4;

export const INITIAL_FILTERS: CamperFilters = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
  equipment: [],
};

export type FilterOption<T extends string = string> = {
  value: T;
  label: string;
};

/** Values that exist in the API data (the design lists a few more). */
export const API_FORMS = ['alcove', 'panelTruck', 'fullyIntegrated'];
export const API_ENGINES = ['diesel', 'petrol', 'hybrid'];

export const FORM_OPTIONS: FilterOption[] = [
  { value: 'alcove', label: 'Alcove' },
  { value: 'panelTruck', label: 'Panel Van' },
  { value: 'fullyIntegrated', label: 'Integrated' },
  { value: 'semiIntegrated', label: 'Semi Integrated' },
];

export const ENGINE_OPTIONS: FilterOption[] = [
  { value: 'diesel', label: 'Diesel' },
  { value: 'petrol', label: 'Petrol' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'electric', label: 'Electric' },
];

export const TRANSMISSION_OPTIONS: FilterOption[] = [
  { value: 'automatic', label: 'Automatic' },
  { value: 'manual', label: 'Manual' },
];

export const EQUIPMENT_LABELS: Record<EquipmentKey, string> = {
  AC: 'AC',
  bathroom: 'Bathroom',
  kitchen: 'Kitchen',
  TV: 'TV',
  radio: 'Radio',
  refrigerator: 'Refrigerator',
  microwave: 'Microwave',
  gas: 'Gas',
  water: 'Water',
};

export const EQUIPMENT_OPTIONS: FilterOption<EquipmentKey>[] = (
  Object.keys(EQUIPMENT_LABELS) as EquipmentKey[]
).map(value => ({ value, label: EQUIPMENT_LABELS[value] }));

/** Human-readable names of camper body types (API value → label). */
export const FORM_LABELS: Record<string, string> = {
  alcove: 'Alcove',
  panelTruck: 'Panel truck',
  fullyIntegrated: 'Fully integrated',
};

/** Vehicle details shown in the table on the camper page, in design order. */
export const VEHICLE_DETAILS = [
  { key: 'form', label: 'Form' },
  { key: 'length', label: 'Length' },
  { key: 'width', label: 'Width' },
  { key: 'height', label: 'Height' },
  { key: 'tank', label: 'Tank' },
  { key: 'consumption', label: 'Consumption' },
] as const;

import { capitalize } from '@/common/utils/format';
import { EQUIPMENT_LABELS, FORM_LABELS, VEHICLE_DETAILS } from './constants';
import { Camper, EquipmentKey } from './types';

export type CamperFeature = {
  key: string;
  label: string;
  icon?: string;
};

export const getFormLabel = (form: string): string =>
  FORM_LABELS[form] ?? capitalize(form);

/**
 * Short list of badges for a catalog card: engine, transmission and body type.
 */
export const getCamperCardBadges = ({
  engine,
  transmission,
  form,
}: Camper): CamperFeature[] => [
  { key: 'engine', label: capitalize(engine), icon: 'engine' },
  {
    key: 'transmission',
    label: capitalize(transmission),
    icon: 'transmission',
  },
  { key: 'form', label: getFormLabel(form), icon: 'camper' },
];

/**
 * Full list of features for the camper page. Built from the properties
 * required by the spec: transmission, engine and every equipment flag that
 * is `true` on this camper.
 */
export const getCamperFeatures = (camper: Camper): CamperFeature[] => {
  const features: CamperFeature[] = [];

  if (camper.transmission) {
    features.push({
      key: 'transmission',
      label: capitalize(camper.transmission),
    });
  }
  if (camper.engine) {
    features.push({ key: 'engine', label: capitalize(camper.engine) });
  }

  (Object.keys(EQUIPMENT_LABELS) as EquipmentKey[])
    .filter(key => camper[key])
    .forEach(key => features.push({ key, label: EQUIPMENT_LABELS[key] }));

  return features;
};

/** Rows for the "Vehicle details" table, skipping empty values. */
export const getVehicleDetails = (camper: Camper) =>
  VEHICLE_DETAILS.filter(({ key }) => Boolean(camper[key])).map(
    ({ key, label }) => ({
      key,
      label,
      value:
        key === 'form' ? getFormLabel(camper.form) : formatUnit(camper[key]),
    })
  );

/** "5.4m" → "5.4 m", "12.4l/100km" → "12.4 l / 100km" (as in the design). */
const formatUnit = (value: string): string =>
  value.replace(/^([\d.,]+)\s*/, '$1 ').replace(/\s*\/\s*/, ' / ');

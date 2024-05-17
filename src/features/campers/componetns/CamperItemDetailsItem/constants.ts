const BaseCamperDetailsMap = {
  adults: {
    text: 'adults',
    svg: 'users',
    showValue: true,
  },
  automatic: {
    text: 'Automatic',
    svg: 'automatic',
    showValue: false,
  },
  airConditioner: {
    text: 'Air conditioner',
    svg: 'air-conditioner',
    showValue: true,
  },
  bathroom: {
    text: 'Bathroom',
    svg: 'shower',
    showValue: false,
  },
  kitchen: {
    text: 'kitchen',
    svg: 'kitchen',
    showValue: false,
  },
  beds: {
    text: 'beds',
    svg: 'bed',
    showValue: true,
  },
  TV: {
    text: 'TV',
    svg: 'tv',
    showValue: false,
  },
  CD: {
    text: 'CD',
    svg: 'cd',
    showValue: false,
  },
  radio: {
    text: 'Radio',
    svg: 'radio',
    showValue: false,
  },
  shower: {
    text: 'Shower',
    svg: 'shower',
    showValue: false,
  },
  toilet: {
    text: 'Toilet',
    svg: 'toilet',
    showValue: false,
  },
  freezer: {
    text: 'Freezer',
    svg: 'freezer',
    showValue: false,
  },
  hob: {
    text: 'hob',
    svg: 'hob',
    showValue: true,
  },
  microwave: {
    text: 'Microwave',
    svg: 'microwave',
    showValue: false,
  },
  gas: {
    text: 'Gas',
    svg: 'gas',
    showValue: false,
  },
  water: {
    text: 'Water',
    svg: 'water',
    showValue: false,
  },
  ac: {
    text: 'AC',
    svg: 'wind',
    showValue: false,
  },
  petrol: {
    text: 'Petrol',
    svg: 'petrol',
    showValue: false,
  },
};

export const ShortCamperDetailsMap = {
  adults: BaseCamperDetailsMap.adults,
  automatic: BaseCamperDetailsMap.automatic,
  petrol: BaseCamperDetailsMap.petrol,
  kitchen: BaseCamperDetailsMap.kitchen,
  beds: BaseCamperDetailsMap.beds,
  ac: BaseCamperDetailsMap.ac,
};

export const FullCamperDetailsMap = {
  adults: BaseCamperDetailsMap.adults,
  automatic: BaseCamperDetailsMap.automatic,
  airConditioner: BaseCamperDetailsMap.airConditioner,
  bathroom: BaseCamperDetailsMap.bathroom,
  kitchen: BaseCamperDetailsMap.kitchen,
  beds: BaseCamperDetailsMap.beds,
  TV: BaseCamperDetailsMap.TV,
  CD: BaseCamperDetailsMap.CD,
  radio: BaseCamperDetailsMap.radio,
  shower: BaseCamperDetailsMap.shower,
  toilet: BaseCamperDetailsMap.toilet,
  freezer: BaseCamperDetailsMap.freezer,
  hob: BaseCamperDetailsMap.hob,
  microwave: BaseCamperDetailsMap.microwave,
  gas: BaseCamperDetailsMap.gas,
  water: BaseCamperDetailsMap.water,
  ac: BaseCamperDetailsMap.ac,
  petrol: BaseCamperDetailsMap.petrol,
};

export type CamperDetailName = keyof typeof BaseCamperDetailsMap;

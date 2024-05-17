const BaseCamperDetailsMap = {
  adults: {
    text: 'adults',
    svg: 'src/assets/svg/users.svg',
    showValue: true,
  },
  automatic: {
    text: 'Automatic',
    svg: 'src/assets/svg/automatic.svg',
    showValue: false,
  },
  airConditioner: {
    text: 'Air conditioner',
    svg: 'src/assets/svg/air-conditioner.svg',
    showValue: true,
  },
  bathroom: {
    text: 'Bathroom',
    svg: 'src/assets/svg/shower.svg',
    showValue: false,
  },
  kitchen: {
    text: 'kitchen',
    svg: 'src/assets/svg/kitchen.svg',
    showValue: false,
  },
  beds: {
    text: 'beds',
    svg: 'src/assets/svg/bed.svg',
    showValue: true,
  },
  TV: {
    text: 'TV',
    svg: 'src/assets/svg/tv.svg',
    showValue: false,
  },
  CD: {
    text: 'CD',
    svg: 'src/assets/svg/cd.svg',
    showValue: false,
  },
  radio: {
    text: 'Radio',
    svg: 'src/assets/svg/radio.svg',
    showValue: false,
  },
  shower: {
    text: 'Shower',
    svg: 'src/assets/svg/shower.svg',
    showValue: false,
  },
  toilet: {
    text: 'Toilet',
    svg: 'src/assets/svg/toilet.svg',
    showValue: false,
  },
  freezer: {
    text: 'Freezer',
    svg: 'src/assets/svg/freezer.svg',
    showValue: false,
  },
  hob: {
    text: 'hob',
    svg: 'src/assets/svg/hob.svg',
    showValue: true,
  },
  microwave: {
    text: 'Microwave',
    svg: 'src/assets/svg/microwave.svg',
    showValue: false,
  },
  gas: {
    text: 'Gas',
    svg: 'src/assets/svg/gas.svg',
    showValue: false,
  },
  water: {
    text: 'Water',
    svg: 'src/assets/svg/water.svg',
    showValue: false,
  },
  ac: {
    text: 'AC',
    svg: 'src/assets/svg/wind.svg',
    showValue: false,
  },
  petrol: {
    text: 'Petrol',
    svg: 'src/assets/svg/petrol.svg',
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

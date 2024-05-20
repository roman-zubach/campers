import React from 'react';
import { Camper } from '@/features/camper/types';
import { FullCamperDetailsMap, ShortCamperDetailsMap } from './constants';
import { CamperDetailsItem } from './components';

import './assets/index.scss';

type Props = Pick<Camper, 'details' |'adults'> & {
  fullList: boolean;
}

export const CamperDetails: React.FC<Props> = ({ details, adults, fullList }) => {
  const map = fullList ? FullCamperDetailsMap : ShortCamperDetailsMap;
  type CamperDetailsKey = keyof typeof map;

  const { adults: mapAdults, automatic, ac, petrol } = map;

  return (
    <div className="camper_details">
      <CamperDetailsItem text={mapAdults.text} svg={mapAdults.svg} showValue={mapAdults.showValue} value={adults} />
      <CamperDetailsItem text={automatic.text} svg={automatic.svg} showValue={automatic.showValue} value={0} />
      {details.airConditioner > 0 && <CamperDetailsItem text={ac.text} svg={ac.svg} showValue={ac.showValue} value={0}/> }
      <CamperDetailsItem text={petrol.text} svg={petrol.svg} showValue={petrol.showValue} value={0} />

      {Object.entries(details).map(([key, value]) => {
        const typedKey = key as CamperDetailsKey;
        const data = map[typedKey];

        if (!data) return null;

        return <CamperDetailsItem
          key={key}
          text={data.text}
          svg={data.svg}
          showValue={data.showValue}
          value={value}
        />;
      })}
    </div>
  );
};

import React from 'react';
import { Camper } from '@/features/camper/types';
import {
  FullCamperDetailsMap,
  ShortCamperDetailsMap,
} from '@/features/camper/componetns/CamperItemDetails/constants';

import { CamperItemDetailsItem } from './components/CamperItemDetailsItem';

import './assets/index.scss';

type Props = {
  camper: Camper;
  fullList: boolean;
}

export const CamperItemDetails: React.FC<Props> = ({ camper, fullList }) => {
  const map = fullList ? FullCamperDetailsMap : ShortCamperDetailsMap;
  type CamperDetailsKey = keyof typeof map;

  const { details, adults: adultsCount } = camper;
  const { adults, automatic, ac, petrol } = map;

  return (
    <div className="camper_item_details">
      <CamperItemDetailsItem text={adults.text} svg={adults.svg} showValue={adults.showValue} value={adultsCount} />
      <CamperItemDetailsItem text={automatic.text} svg={automatic.svg} showValue={automatic.showValue} value={0} />
      {details.airConditioner > 0 && <CamperItemDetailsItem text={ac.text} svg={ac.svg} showValue={ac.showValue} value={0}/> }
      <CamperItemDetailsItem text={petrol.text} svg={petrol.svg} showValue={petrol.showValue} value={0} />

      {Object.entries(details).map(([key, value]) => {
        const typedKey = key as CamperDetailsKey;
        const data = map[typedKey];

        if (!data) return null;

        return <CamperItemDetailsItem
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
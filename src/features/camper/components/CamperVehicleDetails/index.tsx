import React from 'react';

import { Badge } from '@/common/components';
import { Camper } from '@/features/camper/types';
import { getCamperFeatures, getVehicleDetails } from '@/features/camper/utils';

import './assets/index.scss';

type Props = {
  camper: Camper;
};

export const CamperVehicleDetails: React.FC<Props> = ({ camper }) => (
  <section className="camper_vehicle_details panel">
    <h2 className="camper_vehicle_details__title">Vehicle details</h2>

    <ul className="camper_vehicle_details__features">
      {getCamperFeatures(camper).map(({ key, label }) => (
        <li key={key}>
          <Badge label={label} />
        </li>
      ))}
    </ul>

    <dl className="camper_vehicle_details__table">
      {getVehicleDetails(camper).map(({ key, label, value }) => (
        <div className="camper_vehicle_details__row" key={key}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  </section>
);

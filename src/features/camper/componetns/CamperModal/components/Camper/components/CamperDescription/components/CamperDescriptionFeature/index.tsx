import React from 'react';
import { Camper } from '@/features/camper/types';
import { CamperDetails } from '@/features/camper/componetns';

import './assets/index.scss';

type Props = Pick<Camper, 'form' | 'length' | 'width' | 'height' | 'details' | 'tank' | 'adults' | 'consumption'>

export const CamperDescriptionFeature: React.FC<Props> = ({form, adults, tank, length, height, width, details, consumption}) => {
  return (
    <div className="camper_description_feature">
      <CamperDetails adults={adults} details={details} fullList={true} />
      <div className="camper_description_feature__vehicle">
        <h3>Vehicle details</h3>
        <hr className="line" />
        <ul className="camper_description_feature__vehicle_list">
          <li className="camper_description_feature__vehicle_item">
            <p className="camper_description_feature__vehicle_item_text">Form:</p>
            <p className="camper_description_feature__vehicle_item_text">{form}</p>
          </li>
          <li className="camper_description_feature__vehicle_item">
            <p className="camper_description_feature__vehicle_item_text">Length:</p>
            <p className="camper_description_feature__vehicle_item_text">{length}</p>
          </li>
          <li className="camper_description_feature__vehicle_item">
            <p className="camper_description_feature__vehicle_item_text">Width:</p>
            <p className="camper_description_feature__vehicle_item_text">{width}</p>
          </li>
          <li className="camper_description_feature__vehicle_item">
            <p className="camper_description_feature__vehicle_item_text">Height:</p>
            <p className="camper_description_feature__vehicle_item_text">{height}</p>
          </li>
          <li className="camper_description_feature__vehicle_item">
            <p className="camper_description_feature__vehicle_item_text">Tank:</p>
            <p className="camper_description_feature__vehicle_item_text">{tank}</p>
          </li>
          <li className="camper_description_feature__vehicle_item">
            <p className="camper_description_feature__vehicle_item_text">Consumption:</p>
            <p className="camper_description_feature__vehicle_item_text">{consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

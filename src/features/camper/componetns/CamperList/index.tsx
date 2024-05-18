import React from 'react';

import { Camper } from '@/features/camper/componetns/types';
import CamperItem from '@/features/camper/componetns/CamperList/CamperItem';

import './assets/index.scss';

type Props = {
  campers: Camper[];
}

export const CamperList = ({campers}: Props) => {
  return (
    <div className="camper_list">
      {campers.map((camper) => <CamperItem camper={camper} key={camper._id} />)}
    </div>
  );
};

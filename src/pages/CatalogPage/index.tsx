import React from 'react';
import data from './campers.json';
import { CamperList, CamperSearchForm } from '@/features/camper/componetns';

import './assets/index.scss';

const Catalog = () => {
  return (
    <div className="catalog">
      <CamperSearchForm />
      <CamperList campers={data} />
    </div>
  );
};

export default Catalog;

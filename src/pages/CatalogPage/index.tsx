import React from 'react';
import { CamperList, CamperSearchForm } from '@/features/camper/componetns';

import './assets/index.scss';

const Catalog = () => {
  return (
    <div className="catalog">
      <CamperSearchForm />
      <CamperList />
    </div>
  );
};

export default Catalog;

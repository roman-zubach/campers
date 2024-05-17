import React from 'react';
import data from './campers.json';
import { CamperList } from '@/features/campers/componetns/CamperList';

const Catalog = () => {
  return (
    <div>
      <CamperList campers={data} />
    </div>
  );
};

export default Catalog;

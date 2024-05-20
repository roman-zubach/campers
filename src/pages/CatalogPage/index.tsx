import React from 'react';
import { CamperList, CamperSearchForm } from '@/features/camper/componetns';

import './assets/index.scss';

const CatalogPage: React.FC = () => {
  return (
    <div className="catalog_page">
      <CamperSearchForm />
      <CamperList />
    </div>
  );
};

export default CatalogPage;

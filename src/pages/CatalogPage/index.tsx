import React from 'react';

import { CamperList, CamperSearchForm } from '@/features/camper/components';

import './assets/index.scss';

const CatalogPage: React.FC = () => (
  <div className="catalog_page">
    <h1 className="visually_hidden">Campers catalog</h1>
    <aside className="catalog_page__sidebar">
      <CamperSearchForm />
    </aside>
    <CamperList />
  </div>
);

export default CatalogPage;

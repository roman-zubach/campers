import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '@/common/components';
import { CamperPage, CatalogPage, HomePage } from '@/pages';
import { routePaths } from '@/routing/constants';

export const RouteList: React.FC = () => (
  <Routes>
    <Route path={routePaths.home()} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={routePaths.catalog()} element={<CatalogPage />} />
      <Route path={routePaths.camper()} element={<CamperPage />} />
    </Route>
    <Route path="*" element={<Navigate to={routePaths.home()} replace />} />
  </Routes>
);

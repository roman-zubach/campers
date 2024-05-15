import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '~/common/components';
import { CatalogPage, FavoritesPage, HomePage } from '~/pages';
import { routePaths } from '~/routing/constants';

export const RouteList: React.FC = () => (
  <Routes>
    <Route path={routePaths.home()} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={routePaths.catalog()} element={<CatalogPage />} />
      <Route path={routePaths.favorites()} element={<FavoritesPage />} />
    </Route>
    <Route path="*" element={<Navigate to={routePaths.home()} />} />
  </Routes>
);


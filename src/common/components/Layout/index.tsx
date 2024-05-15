import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../Loader';
import { LayoutHeader } from './LayoutHeader';
import { LayoutFooter } from './LayoutFooter';

export const Layout: React.FC = () => {
  return (
    <div>
      <LayoutHeader />
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <LayoutFooter />
    </div>
  );
};

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../Loader';
import { LayoutHeader } from './LayoutHeader';
import { LayoutFooter } from './LayoutFooter';

import './assets/index.scss';

export const Layout: React.FC = () => {
  return (
    <>
      <LayoutHeader />
      <div className='main'>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <LayoutFooter />
    </>
  );
};

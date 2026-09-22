import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

import { Loader } from '../Loader';
import { LayoutHeader } from './LayoutHeader';

import './assets/index.scss';

export const Layout: React.FC = () => (
  <>
    <LayoutHeader />
    <main className="main">
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
    <Toaster position="top-right" />
  </>
);

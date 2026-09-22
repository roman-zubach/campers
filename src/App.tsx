import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RouteList } from '@/routing/components';

// Opt in to React Router v7 behaviour (also silences future-flag warnings)
const routerFutureFlags = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

const App: React.FC = () => (
  <BrowserRouter future={routerFutureFlags}>
    <RouteList />
  </BrowserRouter>
);

export default App;

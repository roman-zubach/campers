import React from 'react';
import { NavLink } from 'react-router-dom';
import { routePaths } from '@/routing/constants';

import './assets/index.scss';

export const LayoutHeader: React.FC = () => {
  return (
    <div className='header'>
      <nav>
        <ul className="header__navigation">
          <li>
            <NavLink className="header__navigation_item" to={routePaths.home()}>Home</NavLink>
          </li>
          <li>
            <NavLink className="header__navigation_item" to={routePaths.catalog()}>Catalog</NavLink>
          </li>
          <li>
            <NavLink className="header__navigation_item" to={routePaths.favorites()}>Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

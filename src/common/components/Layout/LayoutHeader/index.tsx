import React from 'react';
import { NavLink } from 'react-router-dom';

import './assets/index.scss';

export const LayoutHeader: React.FC = () => {
  return (
    <div className='header'>
      <nav>
        <ul className="navigation">
          <li className="navigation-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

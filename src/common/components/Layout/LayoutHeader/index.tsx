import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { routePaths } from '@/routing/constants';

import './assets/index.scss';

const navLinks = [
  { to: routePaths.home(), label: 'Home', end: true },
  { to: routePaths.catalog(), label: 'Catalog', end: false },
];

export const LayoutHeader: React.FC = () => (
  <header className="header">
    <div className="header__container">
      <Link
        className="header__logo"
        to={routePaths.home()}
        aria-label="TravelTrucks home"
      >
        Travel<span className="header__logo_accent">Trucks</span>
      </Link>
      <nav className="header__nav" aria-label="Main navigation">
        <ul className="header__nav_list">
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink className="header__nav_link" to={to} end={end}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

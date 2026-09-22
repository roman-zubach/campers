import React from 'react';

import { Button } from '@/common/components';
import { routePaths } from '@/routing/constants';

import './assets/index.scss';

export const HomePageHero: React.FC = () => (
  <section className="hero">
    <div className="hero__container">
      <h1 className="hero__title">Campers of your dreams</h1>
      <p className="hero__text">
        You can find everything you want in our catalog
      </p>
      <Button to={routePaths.catalog()} className="hero__button">
        View Now
      </Button>
    </div>
  </section>
);

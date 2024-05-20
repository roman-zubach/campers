import React from 'react';

import { HomePageAbout, HomePageContact, HomePageHero, HomePageService } from '@/features/homepage/components';

import './assets/index.css';

const HomePage: React.FC = () => (
  <div>
    <HomePageHero />
    <HomePageService />
    <HomePageAbout />
    <HomePageContact />
  </div>
);

export default HomePage;

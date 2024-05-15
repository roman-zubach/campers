import React from 'react';

import './assets/index.scss';

export const HomePageService: React.FC = () => (
  <section className="services">
    <h2 className="service__title">Our Services</h2>
    <div className="service__container">
      <img className="service__container_img" src="service1.jpg" alt="Camper Rental" />
      <h3 className="service__container_title">Camper Rental</h3>
      <p className="service__container_text">
        A wide selection of campers of various sizes and configurations. Choose the
        one that suits your needs best.
      </p>
    </div>
    <div className="service__container">
      <img className="service__container_img" src="service2.jpg" alt="Camper Tours" />
      <h3 className="service__container_title">Camper Tours</h3>
      <p className="service__container_text">
        Travel in the company of our experienced guides. They will select the best
        routes and interesting places to visit for you.
      </p>
    </div>
  </section>
);

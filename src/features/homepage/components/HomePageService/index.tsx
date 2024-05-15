import React from 'react';

import serviceImg from './assets/service-1.jpg';
import tourImg from './assets/service-2.jpg';
import './assets/index.scss';

export const HomePageService: React.FC = () => (
  <section className="service">
    <h2 className="service__title">Our Services</h2>
    <div className="service__container">
      <img className="service__container_img" src={serviceImg} alt="Camper Rental" />
      <div className="service__container_body">
        <h3 className="service__container_body_title">Camper Rental</h3>
        <p className="service__container_body_text">
          A wide selection of campers of various sizes and configurations awaits you at our rental service.
          Whether you're planning a solo adventure or a family getaway, we have the perfect camper for you.
          Our fleet includes cozy vans, spacious motorhomes, and everything in between.
          Each camper is meticulously maintained and equipped with all the essentials for a comfortable journey.
          Choose the one that suits your needs best and embark on your next adventure with confidence.
        </p>
      </div>
    </div>
    <div className="service__container service__container_revers">
      <img className="service__container_img" src={tourImg} alt="Camper Tours" />
      <div className="service__container_body">
        <h3 className="service__container_body_title">Camper Tours</h3>
        <p className="service__container_body_text">
          Experience unforgettable adventures with our guided camper tours.
          Our experienced guides will take you on breathtaking journeys through picturesque landscapes,
          charming towns, and hidden gems.
          Whether you prefer scenic drives along coastal roads, thrilling mountain trails,
          or cultural exploration in historic cities, we have the perfect tour for you.
          Sit back, relax, and let us handle all the details while you immerse yourself in the beauty
          and wonder of the world around you.
        </p>
      </div>
    </div>
  </section>
);

import React from 'react';

import './assets/index.scss';

export const HomePageContact: React.FC = () => (
  <section className="contact">
    <h2 className="contact__title">Contact</h2>
    <p className="contact__text">
      Have questions or want to book a camper? Contact us using the details below:
    </p>
    <ul className="contact__list">
      <li className="contact__list_item">
        Phone: <a href="tel:+380123456789" className="contact__list_item_link">
        +380123456789
      </a>
      </li>
      <li className="contact__list_item">
        Email: <a href="mailto:info@devstudio.com" className="contact__list_item_link">
        info@rentacamp.com
      </a>
      </li>
      <li className="contact__list_item">
        Address: Example Street, 123, Kyiv
      </li>
    </ul>
  </section>
);

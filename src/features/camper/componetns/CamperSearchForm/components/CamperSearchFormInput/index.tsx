import React from 'react';
import { Icon } from '@/common/components/Icon';

import './assets/index.scss';

export const CamperSearchFormInput: React.FC = () => {
  return (
    <div className="camper_search_input_group">
      <label className="camper_search_input_group__label" htmlFor="location">Location</label>
      <div className="camper_search_input_group__container">
        <input
          className="camper_search_input_group__input"
          type="text"
          name="location"
          placeholder="City"
        />
        <Icon className="camper_search_input_group__icon" name="map-pin" width="16" height="16" />
      </div>
    </div>
  );
};

import React from 'react';

import { Icon } from '@/common/components';

import './assets/index.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const LocationInput: React.FC<Props> = ({ value, onChange }) => (
  <label className="location_input">
    <span className="location_input__label">Location</span>
    <span className="location_input__field">
      <Icon name="map" size={20} className="location_input__icon" />
      <input
        className="location_input__input"
        type="text"
        name="location"
        placeholder="City"
        autoComplete="address-level2"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </span>
  </label>
);

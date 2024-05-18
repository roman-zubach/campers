import React, { useState } from 'react';

import CamperSearchFormFiltersItem from './CamperSearchFormFiltersItem';
import {
  CheckboxesFiltersItems,
  RadioFiltersItems,
} from '@/features/camper/componetns/CamperSearchForm/CamperSearchFormFilters/types';

import './assert/index.scss';

const CamperSearchFormFilters = () => {
  const [checkboxes, updateCheckboxes] = useState(CheckboxesFiltersItems);

  const [radios, updateRadios] = useState(RadioFiltersItems);

  const handleCheckboxChange = (id: string) => {
    updateCheckboxes(prevState =>
      prevState.map(checkbox =>
        (checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox)
      )
    );
  };

  const handleRadioChange = (id: string) => {
    updateRadios(prevState =>
      prevState.map(radio => ({ ...radio, checked: radio.id === id }))
    );
  };

  return (
    <div className="camper_search_form_filters">
      <p className="camper_search_form_filters__title">Filters</p>
      <div className="camper_search_form_filters__container">
        <h2 className="camper_search_form_filters__container_title">
          Vehicle equipment
        </h2>
        <hr className="camper_search_form_filters__container_line" />
        <ul className="camper_search_form_filters__container_list">
          {checkboxes.map((checkbox) => (
            <CamperSearchFormFiltersItem key={checkbox.id} item={checkbox} type="checkbox" onChange={handleCheckboxChange} />
          ))}
        </ul>
      </div>
      <div className="camper_search_form_filters__container">
        <h2 className="camper_search_form_filters__container_title">
          Vehicle type
        </h2>
        <hr className="camper_search_form_filters__container_line" />
        <ul className="camper_search_form_filters__container_list">
          {radios.map((radio) => (
            <CamperSearchFormFiltersItem key={radio.id} item={radio} type="radio" onChange={handleRadioChange} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CamperSearchFormFilters;

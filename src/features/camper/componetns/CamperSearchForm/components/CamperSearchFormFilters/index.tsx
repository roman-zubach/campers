import React, { useState } from 'react';

import { CheckboxesFiltersItems, RadioFiltersItems} from './types';
import { CamperSearchFormFiltersItem, CamperSearchFormFiltersItemsGroup } from './components';

import './assert/index.scss';

export const CamperSearchFormFilters: React.FC = () => {
  const [checkboxes, updateCheckboxes] = useState(CheckboxesFiltersItems);

  const [radios, updateRadios] = useState(RadioFiltersItems);

  const handleClickCheckbox = (event: React.MouseEvent<HTMLUListElement>) => {
    const id = (event.target as HTMLElement).closest('li')?.id;

    if (!id) return;

    updateCheckboxes(prevState =>
      prevState.map(checkbox =>
        (checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox)
      )
    );
  };

  const handleRadioChange = (event: React.MouseEvent<HTMLUListElement>) => {
    const id = (event.target as HTMLElement).closest('li')?.id;

    if (!id) return;

    updateRadios(prevState =>
      prevState.map(radio => ({ ...radio, checked: radio.id === id && !radio.checked }))
    );
  };

  return (
    <div className="camper_search_form_filters">
      <p className="camper_search_form_filters__title">Filters</p>
      <CamperSearchFormFiltersItemsGroup title="Vehicle equipment" type="checkbox" items={checkboxes} onClick={handleClickCheckbox}/>
      <CamperSearchFormFiltersItemsGroup title="Vehicle type" type="radio" items={radios} onClick={handleRadioChange}/>
    </div>
  );
};

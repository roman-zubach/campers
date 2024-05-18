import React from 'react';

import CamperSearchFormFiltersItem from './CamperSearchFormFiltersItem';

import './assert/index.scss';

const CamperSearchFormFilters = () => {
  return (
    <div className="camper_search_form_filters">
      <p className="camper_search_form_filters__title">Filters</p>
      <div className="camper_search_form_filters__container">
        <h2 className="camper_search_form_filters__container_title">
          Vehicle equipment
        </h2>
        <hr className="camper_search_form_filters__container_line" />
        <ul className="camper_search_form_filters__container_list">
          <CamperSearchFormFiltersItem name="AC" svg="wind" id="ac" />
          <CamperSearchFormFiltersItem name="Automatic" svg="automatic" id="automatic" />
          <CamperSearchFormFiltersItem name="Kitchen" svg="kitchen" id="kitchen" />
          <CamperSearchFormFiltersItem name="TV" svg="tv" id="tv" />
          <CamperSearchFormFiltersItem name="Shower/WC" svg="shower" id="shower" />
        </ul>
      </div>
      <div className="camper_search_form_filters__container">
        <h2 className="camper_search_form_filters__container_title">
          Vehicle type
        </h2>
        <hr className="camper_search_form_filters__container_line" />
        <ul className="camper_search_form_filters__container_list">
          <CamperSearchFormFiltersItem name="Van" svg="van" id="van" />
          <CamperSearchFormFiltersItem name="Fully Integrated" svg="fully-integrated" id="fully-integrated"
          />
          <CamperSearchFormFiltersItem name="Alcove" svg="alcove" id="alcove" />
        </ul>
      </div>
    </div>
  );
};

export default CamperSearchFormFilters;

import React from 'react';
import { Icon } from '@/common/components/Icon';

import './assets/index.scss';
import { FiltersItem } from '@/features/camper/componetns/CamperSearchForm/components/CamperSearchFormFilters/types';

type Props = {
  item: FiltersItem;
  type: 'checkbox' | 'radio';
};

export const CamperSearchFormFiltersItem: React.FC<Props> = ({ item, type }) => {
  const { id, name, svg, checked, text } = item;

  return (
    <li className={`camper_search_form_filters_item ${checked ? 'active' : ''}`} id={id} >
      <input
        className="camper_search_form_filters_item__input"
        type={type}
        name={name}
        checked={checked}
        readOnly
        id={id}
        value={type === "radio" ? id : ""}
      />
      <label className="camper_search_form_filters_item__label" htmlFor={id}>
        <Icon name={svg} height="32" width="32" />
        <p className="camper_search_form_filters_item__label_text">{text}</p>
      </label>
    </li>
  );
};

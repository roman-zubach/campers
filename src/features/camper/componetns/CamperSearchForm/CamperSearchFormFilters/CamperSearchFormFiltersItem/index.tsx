import React from 'react';
import { Icon } from '@/common/components/Icon';

import './assets/index.scss';
import { FiltersItem } from '@/features/camper/componetns/CamperSearchForm/CamperSearchFormFilters/types';

type Props = {
  item: FiltersItem;
  type: 'checkbox' | 'radio';
};

const CamperSearchFormFiltersItem: React.FC<Props> = ({ item, type }) => {
  const { id, name, svg, checked } = item;

  return (
    <li className={`camper_search_form_filters_item ${checked ? 'active' : ''}`} id={id} >
      <input
        className="camper_search_form_filters_item__input"
        type={type}
        checked={checked}
        readOnly
        id={id}
      />
      <label className="camper_search_form_filters_item__label" htmlFor={id}>
        <Icon name={svg} height="32" width="32" />
        <p className="camper_search_form_filters_item__label_text">{name}</p>
      </label>
    </li>
  );
};

export default CamperSearchFormFiltersItem;

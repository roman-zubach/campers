import React from 'react';
import { Icon } from '@/common/components/Icon';

import './assets/index.scss';
import { FiltersItem } from '@/features/camper/componetns/CamperSearchForm/CamperSearchFormFilters/types';

type Props = {
  item: FiltersItem;
  type: 'checkbox' | 'radio';
  onChange: (id: string) => void;
};

const CamperSearchFormFiltersItem: React.FC<Props> = ({ item, type, onChange }) => {
  const { id, name, svg, checked } = item;

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    onChange(id);
  };

  const handleLabelClick = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <li className={`camper_search_form_filters_item ${checked ? 'active' : ''}`} onClick={handleClick}>
      <input
        className="camper_search_form_filters_item__input"
        type={type}
        checked={checked}
        readOnly
        id={id}
      />
      <label className="camper_search_form_filters_item__label" htmlFor={id} onClick={handleLabelClick}>
        <Icon name={svg} height="32" width="32" />
        <p className="camper_search_form_filters_item__label_text">{name}</p>
      </label>
    </li>
  );
};

export default CamperSearchFormFiltersItem;

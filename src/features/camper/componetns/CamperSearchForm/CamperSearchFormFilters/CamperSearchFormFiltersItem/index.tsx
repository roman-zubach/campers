import React, { useState } from 'react';
import { Icon } from '@/common/components/Icon';

import './assets/index.scss';

type Props = {
  id: string;
  name: string;
  svg: string;
};

const CamperSearchFormFiltersItem: React.FC<Props> = ({ id, name, svg }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setChecked(!checked);
  };

  return (
    <li
      className={`camper_search_form_filters_item ${checked ? 'active' : ''}`}
      onClick={handleClick}
    >
      <input
        className="camper_search_form_filters_item__input"
        type="checkbox"
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

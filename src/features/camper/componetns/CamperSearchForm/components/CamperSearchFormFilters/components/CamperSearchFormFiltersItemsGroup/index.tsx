import React from 'react';
import {
  CamperSearchFormFiltersItem
} from '@/features/camper/componetns/CamperSearchForm/components/CamperSearchFormFilters/components';
import { FiltersItem } from '@/features/camper/componetns/CamperSearchForm/components/CamperSearchFormFilters/types';

import './assets/index.scss';

type Props = {
  title: string;
  items: FiltersItem[];
  type: "checkbox" | "radio";
  onClick: (event: React.MouseEvent<HTMLUListElement>) => void;
}

export const CamperSearchFormFiltersItemsGroup: React.FC<Props> = ({ title, items, type,  onClick}) => {
  return (
    <div className="camper_search_form_filters_items_group">
      <h2 className="camper_search_form_filters_items_group__title">
        { title }
      </h2>
      <hr className="line" />
      <ul className="camper_search_form_filters_items_group__list" onClick={onClick}>
        {items.map((item) => (
          <CamperSearchFormFiltersItem key={item.id} item={item} type={type} />
        ))}
      </ul>
    </div>
  );
};

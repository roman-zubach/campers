import React from 'react';

import { Button, Icon } from '@/common/components';
import { useCatalogActions } from '@/features/camper/hooks/useCatalogActions';
import emptyStateImage from '@assets/images/empty-state.webp';

import './assets/index.scss';

export const CamperListEmpty: React.FC = () => {
  const { clearFilters } = useCatalogActions();

  return (
    <div className="camper_list_empty">
      <img
        className="camper_list_empty__img"
        src={emptyStateImage}
        alt=""
        width={488}
        height={463}
      />
      <h2 className="camper_list_empty__title">No campers found</h2>
      <p className="camper_list_empty__text">
        We couldn`t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>
      <div className="camper_list_empty__actions">
        <Button variant="outline" onClick={clearFilters}>
          <Icon name="close" size={20} />
          Clear filters
        </Button>
        <Button onClick={clearFilters}>View all campers</Button>
      </div>
    </div>
  );
};

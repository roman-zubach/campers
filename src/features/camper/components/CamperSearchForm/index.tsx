import React, { useEffect, useState } from 'react';

import { Button, Icon } from '@/common/components';
import {
  ENGINE_OPTIONS,
  EQUIPMENT_OPTIONS,
  FORM_OPTIONS,
  TRANSMISSION_OPTIONS,
} from '@/features/camper/constants';
import { useCatalogActions } from '@/features/camper/hooks/useCatalogActions';
import { selectFilters } from '@/features/camper/redux/selectors';
import { CamperFilters, EquipmentKey } from '@/features/camper/types';
import { useAppSelector } from '@/redux/hooks';
import { FilterGroup, LocationInput } from './components';

import './assets/index.scss';

type SingleFilterKey = 'form' | 'engine' | 'transmission';

export const CamperSearchForm: React.FC = () => {
  const filters = useAppSelector(selectFilters);
  const { search, clearFilters } = useCatalogActions();

  // Draft filters: applied to the store only when the user clicks "Search"
  const [draft, setDraft] = useState<CamperFilters>(filters);

  // Keep the form in sync when filters are reset from elsewhere (empty state)
  useEffect(() => {
    setDraft(filters);
  }, [filters]);

  const toggleSingle = (key: SingleFilterKey) => (value: string) =>
    setDraft(prev => ({ ...prev, [key]: prev[key] === value ? '' : value }));

  const toggleEquipment = (value: string) => {
    const key = value as EquipmentKey;
    setDraft(prev => ({
      ...prev,
      equipment: prev.equipment.includes(key)
        ? prev.equipment.filter(item => item !== key)
        : [...prev.equipment, key],
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search(draft);
  };

  return (
    <form className="camper_search_form" onSubmit={handleSubmit}>
      <LocationInput
        value={draft.location}
        onChange={location => setDraft(prev => ({ ...prev, location }))}
      />

      <h2 className="camper_search_form__title">Filters</h2>

      <FilterGroup
        title="Camper form"
        name="form"
        type="radio"
        options={FORM_OPTIONS}
        selected={draft.form}
        onToggle={toggleSingle('form')}
      />
      <FilterGroup
        title="Engine"
        name="engine"
        type="radio"
        options={ENGINE_OPTIONS}
        selected={draft.engine}
        onToggle={toggleSingle('engine')}
      />
      <FilterGroup
        title="Transmission"
        name="transmission"
        type="radio"
        options={TRANSMISSION_OPTIONS}
        selected={draft.transmission}
        onToggle={toggleSingle('transmission')}
      />
      <FilterGroup
        title="Vehicle equipment"
        name="equipment"
        type="checkbox"
        options={EQUIPMENT_OPTIONS}
        selected={draft.equipment}
        onToggle={toggleEquipment}
      />

      <div className="camper_search_form__actions">
        <Button type="submit">Search</Button>
        <Button variant="outline" onClick={clearFilters}>
          <Icon name="close" size={20} />
          Clear filters
        </Button>
      </div>
    </form>
  );
};

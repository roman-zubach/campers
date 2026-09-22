import React from 'react';

import { FilterOption } from '@/features/camper/constants';

import './assets/index.scss';

type Props = {
  title: string;
  name: string;
  options: FilterOption[];
  type: 'radio' | 'checkbox';
  selected: string | string[];
  onToggle: (value: string) => void;
};

export const FilterGroup: React.FC<Props> = ({
  title,
  name,
  options,
  type,
  selected,
  onToggle,
}) => {
  const isChecked = (value: string) =>
    Array.isArray(selected) ? selected.includes(value) : selected === value;

  return (
    <fieldset className="filter_group">
      <legend className="filter_group__title">{title}</legend>
      <ul className="filter_group__list">
        {options.map(({ value, label }) => {
          const checked = isChecked(value);

          return (
            <li key={value}>
              <label className="filter_group__item">
                <input
                  className={`filter_group__input filter_group__input_${type}`}
                  type={type}
                  name={name}
                  value={value}
                  checked={checked}
                  onChange={() => onToggle(value)}
                  onClick={() => type === 'radio' && checked && onToggle(value)}
                />
                {label}
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
};

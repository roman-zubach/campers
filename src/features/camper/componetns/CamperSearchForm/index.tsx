import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@/common/components';
import { AppDispatch } from '@/redux/store';
import { updateFilterAction } from '@/features/camper/redux/camperSlice';
import { CamperSearchFormFilters, CamperSearchFormInput } from './components';

import './assets/index.scss';

type CamperSearchFormElements = {
  location: { value: string };
  ac: { checked: boolean };
  automatic: { checked: boolean };
  kitchen: { checked: boolean };
  tv: { checked: boolean };
  shower: { checked: boolean };
  form: { value: string };
}

export const CamperSearchForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      location,
      ac,
      automatic,
      kitchen,
      tv,
      shower,
      form,
    } = event.currentTarget.elements as unknown as CamperSearchFormElements;

    dispatch(updateFilterAction({
      location: location.value,
      ac: ac.checked,
      automatic: automatic.checked,
      kitchen: kitchen.checked,
      tv: tv.checked,
      shower: shower.checked,
      form: form.value,
    }));
  };

  return (
    <form className="camper_search_form" onSubmit={handleSubmit}>
      <CamperSearchFormInput />
      <CamperSearchFormFilters />
      <Button type="submit" text="Search" styles="btn_main" />
    </form>
  );
};

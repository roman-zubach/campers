import React from 'react';

import CamperSearchFormInput from '@/features/camper/componetns/CamperSearchForm/CamperSearchFormInput';
import CamperSearchFormFilters from '@/features/camper/componetns/CamperSearchForm/CamperSearchFormFilters';
import { Button } from '@/common/components';

import './assets/index.scss';

export const CamperSearchForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <form className="camper_search_form" onSubmit={handleSubmit}>
      <CamperSearchFormInput />
      <CamperSearchFormFilters />
      <Button type="submit" text="Search" styles="btn_main" />
    </form>
  );
};

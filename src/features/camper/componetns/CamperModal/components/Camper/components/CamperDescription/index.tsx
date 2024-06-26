import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Camper } from '@/features/camper/types';
import { Button } from '@/common/components';
import { CamperDescriptionFeature, CamperDescriptionReview } from './components';
import { AppDispatch } from '@/redux/store';
import { bookCamperAction } from '@/features/booking/redux/bookingSlice';
import { BookingCamperForm } from '@/features/booking/components';
import { BookingCamperFormValues } from '@/features/booking/types';

import './assets/index.scss';

type Props = {
  camper: Camper;
}

export const CamperDescription: React.FC<Props> = ({ camper }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeButton, setActiveButton] = useState('Features');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleSubmit = (data: BookingCamperFormValues) => {
    const dateTimestamp = typeof data.date === 'string'
      ? new Date(data.date).getTime()
      : data.date.getTime();

    dispatch(bookCamperAction({ camper, ...data, date: dateTimestamp }));
  };

  const {
    description,
    reviews,
    adults,
    length,
    tank,
    details,
    form,
    height,
    width,
    consumption,
  } = camper;

  return (
    <div className="camper_description">
      <p className="camper_description__text">{description}</p>
      <div className="camper_description__btn_group">
        <Button
          className={`camper_description__btn_group_item ${activeButton === 'Features' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Features')}
        >
          Features
        </Button>
        <Button
          className={`camper_description__btn_group_item ${activeButton === 'Reviews' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Reviews')}
        >
          Reviews
        </Button>
      </div>
      <div className="camper_description__details">
        {activeButton === 'Features' ?
          <CamperDescriptionFeature
            adults={adults}
            details={details}
            form={form}
            height={height}
            width={width}
            length={length}
            tank={tank}
            consumption={consumption}
          />
          :
          <CamperDescriptionReview reviews={reviews} />
        }
        <BookingCamperForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

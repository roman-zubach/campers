import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Camper } from '@/features/camper/types';
import { Button } from '@/common/components';
import { CamperDescriptionFeature, CamperDescriptionForm, CamperDescriptionReview } from './components';

import {
  CamperDescriptionFormValues,
} from '@/features/camper/componetns/CamperModal/components/Camper/components/CamperDescription/types';
import { AppDispatch } from '@/redux/store';
import { selectSelectedCamper } from '@/features/camper/redux/selectors';
import { bookCamperAction } from '@/features/camper/redux/camperSlice';

import './assets/index.scss';

type Props = Pick<
  Camper,
  'description' | 'reviews' | 'form' | 'length' | 'width' | 'height' | 'details' | 'tank' | 'adults' | 'consumption'
>;

export const CamperDescription: React.FC<Props> = ({
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
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const camper = useSelector(selectSelectedCamper);

  const [activeButton, setActiveButton] = useState('Features');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleSubmit = (data: CamperDescriptionFormValues) => {
    const dateTimestamp = typeof data.date === 'string'
      ? new Date(data.date).getTime()
      : data.date.getTime();

    dispatch(bookCamperAction({ camper, ...data, date: dateTimestamp }));
  };

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
        <CamperDescriptionForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

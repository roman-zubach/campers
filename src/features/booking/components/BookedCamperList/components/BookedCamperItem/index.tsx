import React from 'react';
import { BookedCamper } from '@/features/booking/types';
import { formatUTCDateToString, isCurrentDateLessThanValue } from '@/common/utils/date';
import { Image, Location } from '@/common/components';

import './assets/index.scss';

type Props = {
  bookedCamper: BookedCamper;
}

export const BookedCamperItem: React.FC<Props> = ({ bookedCamper}) => {
  const {camper: {name, gallery, price, location}, date, comment} = bookedCamper;

  return (
    <div className={`booked_camper_item ${isCurrentDateLessThanValue(date) ? '' : 'disabled'}`}>
      <h2 className="booked_camper_item__date">{formatUTCDateToString(date)}</h2>
        <Image src={gallery[0]} alt={name} className="booked_camper_item__img" />
      <div className="booked_camper_item__details">
        <div className="booked_camper_item__details_header">
          <h3 className="booked_camper_item__details_header_name">{name}</h3>
          <Location name={location} className="booked_camper_item__details_header_location" />
        </div>
        <h3 className="booked_camper_item__details_price">€{price}</h3>
      </div>
      <p className="booked_camper_item__comment">Comment: {comment}</p>
    </div>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';
import { selectSortedBookedCampers } from '@/features/booking/redux/selectors';
import { NotFoundMessage } from '@/common/components';
import { BookedCamperItem } from './components';

import './assets/index.scss';

export const BookedCamperList = () => {
  const bookedCampers = useSelector(selectSortedBookedCampers);

  return (
    <div className="booked_camper_list">
      <h2 className="booked_camper_list__title">Your booked campers</h2>
      <ul className="booked_camper_list__items">
        {bookedCampers.length > 0 ? (
          bookedCampers.map((bookedCamper) => (
            <BookedCamperItem bookedCamper={bookedCamper} key={bookedCamper.id} />
          ))
        ) : (
          <NotFoundMessage />
        )}
      </ul>
    </div>
  );
};

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorMessage, Loader } from '@/common/components';
import { BookingCamperForm } from '@/features/booking/components';
import {
  CamperGallery,
  CamperReviews,
  CamperSummary,
  CamperVehicleDetails,
} from '@/features/camper/components';
import { fetchCamperById } from '@/features/camper/redux/operations';
import {
  selectCurrentCamper,
  selectCurrentError,
  selectIsCurrentLoading,
} from '@/features/camper/redux/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import './assets/index.scss';

const CamperPage: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const camper = useAppSelector(selectCurrentCamper);
  const isLoading = useAppSelector(selectIsCurrentLoading);
  const error = useAppSelector(selectCurrentError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (camper) document.title = `${camper.name} — TravelTrucks`;
  }, [camper]);

  if (error) {
    return (
      <ErrorMessage
        title="Camper not found"
        text="The camper you are looking for does not exist or was removed."
      />
    );
  }

  if (isLoading || !camper || camper.id !== id) {
    return <Loader />;
  }

  return (
    <div className="camper_page">
      <div className="camper_page__row">
        <CamperGallery
          key={camper.id}
          images={camper.gallery}
          name={camper.name}
        />
        <div className="camper_page__info">
          <CamperSummary camper={camper} />
          <CamperVehicleDetails camper={camper} />
        </div>
      </div>
      <div className="camper_page__row camper_page__row_bottom">
        <CamperReviews reviews={camper.reviews} />
        <BookingCamperForm camperName={camper.name} />
      </div>
    </div>
  );
};

export default CamperPage;

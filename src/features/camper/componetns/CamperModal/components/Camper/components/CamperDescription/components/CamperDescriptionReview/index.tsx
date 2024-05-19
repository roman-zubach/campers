import React from 'react';
import { CamperReview } from '@/features/camper/types';
import { CamperDescriptionReviewItem } from './components';

import './assets/index.scss';

type Props = {
  reviews: CamperReview[];
}

export const CamperDescriptionReview: React.FC<Props> = ({reviews}) => {
  return (
    <div className="camper_description_review">
      {reviews.map((review, index) =>
        <CamperDescriptionReviewItem review={review} key={index} />
      )}
    </div>
  );
};

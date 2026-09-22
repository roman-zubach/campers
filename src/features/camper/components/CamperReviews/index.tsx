import React from 'react';

import { CamperReview } from '@/features/camper/types';
import { CamperReviewItem } from './components/CamperReviewItem';

import './assets/index.scss';

type Props = {
  reviews: CamperReview[];
};

export const CamperReviews: React.FC<Props> = ({ reviews }) => (
  <section className="camper_reviews">
    <h2 className="camper_reviews__title">Reviews</h2>
    {reviews.length > 0 ? (
      <ul className="camper_reviews__list">
        {reviews.map((review, index) => (
          <CamperReviewItem
            key={`${review.reviewer_name}-${index}`}
            review={review}
          />
        ))}
      </ul>
    ) : (
      <p className="camper_reviews__empty">No reviews yet.</p>
    )}
  </section>
);

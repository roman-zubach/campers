import React from 'react';

import { Avatar, Stars } from '@/common/components';
import { CamperReview } from '@/features/camper/types';

import './assets/index.scss';

type Props = {
  review: CamperReview;
};

export const CamperReviewItem: React.FC<Props> = ({ review }) => {
  const { reviewer_name: name, reviewer_rating: rating, comment } = review;

  return (
    <li className="camper_review_item">
      <div className="camper_review_item__author">
        <Avatar name={name} />
        <div>
          <p className="camper_review_item__name">{name}</p>
          <Stars rating={rating} />
        </div>
      </div>
      <p className="camper_review_item__comment">{comment}</p>
    </li>
  );
};

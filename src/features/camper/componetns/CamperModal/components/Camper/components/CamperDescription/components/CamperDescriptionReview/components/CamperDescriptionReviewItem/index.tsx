import React from 'react';
import { CamperReview } from '@/features/camper/types';
import { Avatar, Icon } from '@/common/components';

import './assets/index.scss';

type Props = {
  review: CamperReview;
}

export const CamperDescriptionReviewItem: React.FC<Props> = ({review}) => {
  const {reviewer_name: userName, reviewer_rating: rating, comment} = review;
  return (
    <div className="camper_description_review_item">
      <div className="camper_description_review_item__user_profile">
        <Avatar userName={userName} />
        <div className="camper_description_review_item__user_profile_info">
          <p className="camper_description_review_item__user_profile_info_name">{userName}</p>
          <div className="camper_description_review_item__user_profile_info_rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <Icon
                key={value}
                name="star"
                className={
                  `camper_description_review_item__user_profile_info_rating_star ${rating >= value ? 'active' : '' }`
                }
                width="16"
                height="16"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="camper_description_review_item__comment">{comment}</p>
    </div>
  );
};

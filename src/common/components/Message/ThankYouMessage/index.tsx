import React from 'react';

import './assets/index.scss';
import { Icon } from '@/common/components';

export const ThankYouMessage: React.FC = () => {
  return (
    <div className="thank_you_message">
      <p>Thank you!!!</p>
      <Icon name="heart" height="30" width="30" className="thank_you_message__icon" />
    </div>
  );
};

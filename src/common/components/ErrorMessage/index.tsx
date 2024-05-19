import React from 'react';
import { Icon } from '@/common/components';

import './assets/index.scss';

export const ErrorMessage = () => {
  return (
    <div className="error_message">
      <Icon className="error_message__icon" name="error" width="40" height="40" />
      <p className="error_message__text">Something go wrong</p>
    </div>
  );
};

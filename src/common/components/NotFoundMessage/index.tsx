import React from 'react';
import { Icon } from '@/common/components/Icon';

import './assets/index.scss';

export const NotFoundMessage = () => {
  return (
    <div className="not_found_message">
      <Icon className="not_found_message__icon" name="not_found" width="32" height="32" />
      <p className="not_found_message__text">Not found</p>
    </div>
  );
};

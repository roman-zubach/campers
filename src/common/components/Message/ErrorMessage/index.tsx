import React from 'react';

import { routePaths } from '@/routing/constants';
import { Button } from '../../Button';
import { Icon } from '../../Icon';

import './assets/index.scss';

type Props = {
  title?: string;
  text?: string;
  /** Show the "Back to catalog" link (hidden on the catalog page itself). */
  withBackLink?: boolean;
};

export const ErrorMessage: React.FC<Props> = ({
  title = 'Something went wrong',
  text = 'Please try again later.',
  withBackLink = true,
}) => (
  <div className="error_message" role="alert">
    <Icon className="error_message__icon" name="alert" size={48} />
    <h2 className="error_message__title">{title}</h2>
    <p className="error_message__text">{text}</p>
    {withBackLink && <Button to={routePaths.catalog()}>Back to catalog</Button>}
  </div>
);

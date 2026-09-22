import React from 'react';

import { Icon } from '../Icon';

import './assets/index.scss';

type Props = {
  label: string;
  icon?: string;
};

export const Badge: React.FC<Props> = ({ label, icon }) => (
  <span className="badge">
    {icon && <Icon name={icon} size={20} />}
    {label}
  </span>
);

import React from 'react';

import './assets/index.scss';

type Props = {
  name: string;
};

export const Avatar: React.FC<Props> = ({ name }) => (
  <span className="avatar" aria-hidden="true">
    {name.charAt(0)}
  </span>
);

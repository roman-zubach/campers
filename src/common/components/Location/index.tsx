import React from 'react';
import { Icon } from '@/common/components';

type Props = {
  name: string;
  className: string;
}

export const Location: React.FC<Props> = ({ name, className}) => {
  return (
    <div className={className}>
      <Icon name="map-pin" width="16" height="16" />
      {name}
    </div>
  );
};

import React from 'react';
import { Button } from '@/common/components';
import { Icon } from '@/common/components';

import './assets/index.scss';

type Props = {
  isActive: boolean;
  onClick: () => void;
}

export const FavoriteButton: React.FC<Props> = ({ isActive, onClick }) => {
  return (
    <Button className="favorite_button" onClick={onClick}>
      <Icon name="heart" className={`favorite_button__heart ${isActive ? 'active' : ''}`} width="24" height="24" />
    </Button>
  );
};

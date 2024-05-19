import React from 'react';

import './assets/index.scss';

type AvatarProps = {
  userName: string;
};

export const Avatar: React.FC<AvatarProps> = ({ userName }) => {
  const getFirstLetter = (name: string) => name.charAt(0);

  return (
    <div className="avatar">
      {getFirstLetter(userName)}
    </div>
  );
};

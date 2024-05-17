import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

import './assets/index.css';

export const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#E44848"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

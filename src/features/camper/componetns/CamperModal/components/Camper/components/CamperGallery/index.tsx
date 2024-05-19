import React from 'react';
import { Image } from '@/common/components';

import './assets/index.scss';

type Props = {
  images: string[],
}

export const CamperGallery: React.FC<Props> = ({ images }) => {
  return (
    <div className="camper_gallery">
      {images.map((src, index) =>
        <Image className="camper_gallery__img" src={src} key={index} alt={`Camper image ${index + 1}`} />,
      )}
    </div>
  );
};

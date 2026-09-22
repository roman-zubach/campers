import React, { useState } from 'react';

import { Image } from '@/common/components';
import { GalleryImage } from '@/features/camper/types';

import './assets/index.scss';

type Props = {
  images: GalleryImage[];
  name: string;
};

export const CamperGallery: React.FC<Props> = ({ images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <div className="camper_gallery">
      <Image
        className="camper_gallery__main"
        src={activeImage?.original}
        alt={`${name} — photo ${activeIndex + 1}`}
        loading="eager"
      />
      {images.length > 1 && (
        <ul className="camper_gallery__thumbs">
          {images.map(({ thumb }, index) => (
            <li key={thumb}>
              <button
                type="button"
                className={`camper_gallery__thumb ${
                  index === activeIndex ? 'camper_gallery__thumb_active' : ''
                }`}
                aria-label={`Show photo ${index + 1}`}
                aria-current={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  className="camper_gallery__thumb_img"
                  src={thumb}
                  alt=""
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

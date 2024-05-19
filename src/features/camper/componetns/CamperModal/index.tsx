import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedCamper } from '@/features/camper/redux/selectors';
import { Camper } from './components';
import { useBodyScrollLock, useEscapeKey } from '@/common/hooks';
import { useModalClose } from './hooks/useModalClose';

import './assets/index.scss';

export const CamperModal = () => {
  const camper = useSelector(selectSelectedCamper);
  const onClose = useModalClose();

  const handleClickOverlay = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  useBodyScrollLock(!!camper);
  useEscapeKey(onClose);

  return (camper && (
    <div className="overlay" onClick={handleClickOverlay}>
      <div className="camper_modal">
        <div className="camper_modal__content">
          <Camper camper={camper} />
        </div>
      </div>
    </div>
  ));
};

import React from 'react';
import { Icon } from '@/common/components/Icon';

import './assets/index.scss';

type Props = {
  text: string;
  svg: string;
  showValue: boolean;
  value: string | number;
}

export const CamperItemDetailsItem: React.FC<Props> = ({ text, svg, showValue, value }) => (
  <div className="camper_item_details_item">
    <Icon name={svg} width="20" height="20" />
    {showValue && value} {text}
  </div>
);

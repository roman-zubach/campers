import React from 'react';
import { Icon } from '@/common/components';

import './assets/index.scss';

type Props = {
  text: string;
  svg: string;
  showValue: boolean;
  value: string | number;
}

export const CamperDetailsItem: React.FC<Props> = ({ text, svg, showValue, value }) => (
  <div className="camper_details_item">
    <Icon name={svg} width="20" height="20" />
    {showValue && value} {text}
  </div>
);

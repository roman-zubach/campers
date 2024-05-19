import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon } from '@/common/components';

import './assets/index.scss';

type Props = {
  name: string;
  placeholderText: string;
}

export const CustomDatePicker: React.FC<Props> = ({ name, placeholderText }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <div className="custom_date_picker">
      <DatePicker
        {...field}
        selected={field.value ? new Date(field.value) : null}
        onChange={(value: Date) => setFieldValue(name, value)}
        dateFormat="yyyy.MM.dd"
        placeholderText={placeholderText}
        className="custom_date_picker__input"
        calendarClassName="custom_date_picker__calendar"
        formatWeekDay={(nameOfDay: string) => nameOfDay.substring(0, 3).toUpperCase()}
      />
      <Icon name="date" width="20" height="20" className="custom_date_picker__input_icon" />
      {meta.touched && meta.error && (
        <div className="custom_date_picker__error">{meta.error}</div>
      )}
    </div>
  );
};

import React from 'react';
import { useField } from 'formik';

import { Icon } from '@/common/components';

import './assets/index.scss';

type Props = {
  name: string;
  label: string;
  type?: 'text' | 'email';
  autoComplete?: string;
};

/**
 * Text input bound to Formik. In the error state (see Figma "Details_error")
 * the label floats over the border and the message is shown below.
 */
export const FormField: React.FC<Props> = ({
  name,
  label,
  type = 'text',
  autoComplete,
}) => {
  const [field, meta] = useField(name);
  const hasError = Boolean(meta.touched && meta.error);
  const errorId = `${name}-error`;

  return (
    <div className={`form_field ${hasError ? 'form_field_error' : ''}`}>
      <div className="form_field__control">
        <label className="form_field__label" htmlFor={name}>
          {label}
        </label>
        <input
          {...field}
          id={name}
          className="form_field__input"
          type={type}
          placeholder={label}
          autoComplete={autoComplete}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
        />
        {hasError && (
          <Icon name="alert" size={20} className="form_field__icon" />
        )}
      </div>
      {hasError && (
        <p className="form_field__message" id={errorId}>
          {meta.error}
        </p>
      )}
    </div>
  );
};

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, CustomDatePicker, ThankYouMessage } from '@/common/components';
import { BookingCamperFormValues } from '@/features/booking/types';
import { useSuccessMessage } from '@/common/hooks/useSuccessMessage';

import './assets/index.scss';

const initialValues: BookingCamperFormValues = {
  userName: '',
  email: '',
  date: '',
  comment: '',
};

const validationSchema = Yup.object().shape({
  userName: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  date: Yup.date().required('Date is required').min(new Date(), 'Date must be in the future'),
  comment: Yup.string(),
});

type Props = {
  onSubmit: (data: BookingCamperFormValues) => void;
}

export const BookingCamperForm: React.FC<Props> = ({ onSubmit }) => {
  const { isSubmitted, setIsSubmitted } = useSuccessMessage();

  return (
    <div className="booking_camper_form">
      <div className="booking_camper_form__header">
        <h3 className="booking_camper_form__header_title">Book your campervan now</h3>
        <p className="booking_camper_form__header_description">
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { resetForm ,setSubmitting }) => {
          onSubmit(data);
          setSubmitting(false);
          setIsSubmitted(true);
          resetForm();
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="booking_camper_form__body">
            <div className="booking_camper_form__body_inputs">
              <div className="booking_camper_form__body_inputs_group">
                <Field
                  name="userName"
                  type="text"
                  className="booking_camper_form__body_input"
                  placeholder="Name"
                />
                {touched.userName && errors.userName && (
                  <div className="booking_camper_form__body_error">{errors.userName}</div>
                )}
              </div>

              <div className="booking_camper_form__body_inputs_group">
                <Field
                  name="email"
                  type="email"
                  className="booking_camper_form__body_input"
                  placeholder="Email"
                />
                {touched.email && errors.email && (
                  <div className="booking_camper_form__body_error">{errors.email}</div>
                )}
              </div>

              <div className="booking_camper_form__body_inputs_group">
                <CustomDatePicker name="date" placeholderText="Booking date" />
                {touched.date && errors.date && (
                  <div className="booking_camper_form__body_error">{errors.date}</div>
                )}
              </div>

              <div className="booking_camper_form__body_inputs_group">
                <Field
                  name="comment"
                  as="textarea"
                  rows="4"
                  className="booking_camper_form__body_input"
                  placeholder="Comment"
                />
                {touched.comment && errors.comment && (
                  <div className="booking_camper_form__body_error">{errors.comment}</div>
                )}
              </div>
            </div>
            <Button type="submit" className="btn_main" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      {isSubmitted && <ThankYouMessage />}
    </div>
  );
};

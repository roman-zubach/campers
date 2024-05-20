import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, CustomDatePicker } from '@/common/components';
import { BookingCamperFormValues } from '@/features/booking/types';

import './assets/index.scss';

const initialValues: BookingCamperFormValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  date: Yup.date().required('Date is required').min(new Date(), 'Date must be in the future'),
  comment: Yup.string(),
});

type Props = {
  onSubmit: (data: BookingCamperFormValues) => void;
}

export const BookingCamperForm: React.FC<Props> = ({ onSubmit }) => {
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
          resetForm();
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="booking_camper_form__body">
            <div className="booking_camper_form__body_inputs">
              <div className="booking_camper_form__body_inputs_group">
                <Field
                  name="name"
                  type="text"
                  className="booking_camper_form__body_input"
                  placeholder="Name"
                />
                {touched.name && errors.name && (
                  <div className="booking_camper_form__body_error">{errors.name}</div>
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
    </div>
  );
};
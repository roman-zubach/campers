import React from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

import { Button } from '@/common/components';
import { FormField } from './components/FormField';

import './assets/index.scss';

type BookingFormValues = {
  name: string;
  email: string;
};

const initialValues: BookingFormValues = {
  name: '',
  email: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Please enter your full name.')
    .matches(/^[\p{L}\s'-]+$/u, 'Please enter your name.')
    .required('Please enter your name.'),
  email: Yup.string()
    .trim()
    .email('Please enter your email.')
    .required('Please enter your email.'),
});

type Props = {
  camperName: string;
};

export const BookingCamperForm: React.FC<Props> = ({ camperName }) => {
  // There is no booking endpoint in the API — a successful submit just
  // notifies the user and clears the form.
  const handleSubmit = (
    { name }: BookingFormValues,
    { resetForm }: FormikHelpers<BookingFormValues>
  ) => {
    toast.success(`Thank you, ${name.trim()}! ${camperName} has been booked.`);
    resetForm();
  };

  return (
    <section className="booking_camper_form">
      <h2 className="booking_camper_form__title">Book your campervan now</h2>
      <p className="booking_camper_form__text">
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="booking_camper_form__form" noValidate>
            <FormField name="name" label="Name*" autoComplete="name" />
            <FormField
              name="email"
              label="Email*"
              type="email"
              autoComplete="email"
            />
            <Button
              type="submit"
              className="booking_camper_form__submit"
              disabled={isSubmitting}
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

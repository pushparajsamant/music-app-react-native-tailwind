import {Formik, FormikHelpers} from 'formik';
import React, {FC} from 'react';

interface Props<T> {
  initialValues: T;
  validationSchema?: any;
  onSubmit(values: T, formikHelpers: FormikHelpers<T>): void;
  children: React.ReactNode;
}

const Form = <T extends object>(props: Props<T>) => {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}>
      {props.children}
    </Formik>
  );
};

export default Form;

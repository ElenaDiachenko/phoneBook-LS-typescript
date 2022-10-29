import { FC } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { Button, Label, Input, Message } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('This field is Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name is not valid'
    ),
  number: yup
    .string()
    .required('This field is Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number is not valid'
    ),
});

export interface Values {
  name: string;
  number: string;
}

const initialValues = {
  name: '',
  number: '',
};

interface IProps {
  onSubmit: (values: Values) => void;
}
export const ContactForm: FC<IProps> = ({ onSubmit }) => {
  const handleSubmit = (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    // console.log(values);
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Name
          <Input type="text" name="name" />
          <Message name="name" component="span" />
        </Label>

        <Label>
          Number
          <Input type="tel" name="number" />
          <Message name="number" component="span" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

import { Component } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as yup from 'yup';
import styled from 'styled-components';

let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
});

const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const products = ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];

export class ProductReviewForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', age: '', email: '' }}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" placeholder="Full name" />
            <FormError name="name" />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <Field name="age" type="text" placeholder="Age" />
            <FormError name="age" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="text" placeholder="Email" />
            <FormError name="email" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  }
}

// Formik -компонент обертка
// Field -  это Инпут Input
// name = 'name'|| id="id";
// initialValues - усли передать значения initialValues={{ name: 'jared', age: '5', email: 'helo@mail.com' }} то они отобразятся в инпутах
//                 потому initialValues={{ name: '', age: '', email: '' }}
// onSubmit={(values, actions) -
// values: {name: '', age: '', email: ''} обьект собраных значений
// actions:   ProductReviewForm.jsx:20 actions: {resetForm: ƒ, validateForm: ƒ, validateField: ƒ, setErrors: ƒ, setFieldError: ƒ, …}
// actions ->полезные методы || свой метод
// validationSchema={schema}- валидация схемы
// ErrorMessage- показывает где сработала валидация с ошибками
// render={message => <p>{ message}</p>} - отрендерить ошибку под инпутом

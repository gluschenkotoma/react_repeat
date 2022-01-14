import { Component } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import styled from 'styled-components';

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

const validationSchema = Yup.object({
  product: Yup.string().required('Please select a product').oneOf(products),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  title: Yup.string().required(),
  review: Yup.string().required(),
  rating: Yup.number().min(1).max(10).required(),
  date: Yup.date().default(() => new Date()),
  wouldRecommend: Yup.boolean().default(false),
});

const initialValues = {
  name: '',
  email: '',
  title: '',
  review: '',
  rating: '',
  date: new Date(),
  wouldRecommend: false,
  product: '',
};

export class Product extends Component {
  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor="name">Full name</label>
            <div>
              <Field name="name" type="text" placeholder="Full name" />
              <FormError name="name" />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email address</label>
            <div>
              <Field name="email" type="text" placeholder="Email address" />
              <FormError name="email" />
            </div>
          </div>

          <div>
            <label htmlFor="product">Product</label>
            <div>
              <Field name="product" as="select">
                <option value="">Select a product</option>
                {products.map((product, idx) => (
                  <option value={product} key={idx}>
                    {product}
                  </option>
                ))}
              </Field>
              <FormError name="product" />
            </div>
          </div>

          <div>
            <label htmlFor="title">Title</label>
            <div>
              <Field name="title" type="text" placeholder="Title" />
              <FormError name="title" />
            </div>
          </div>
          <div>
            <label htmlFor="review">Review</label>
            <div>
              <Field name="review" as="textarea" placeholder="Review" />
              <FormError name="review" />
            </div>
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <div>
              <Field name="rating" type="number" placeholder="Rating" />
              <FormError name="rating" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="wouldRecommend">
                <Field name="wouldRecommend" type="checkbox" />
                Would recommend
              </label>
            </div>
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

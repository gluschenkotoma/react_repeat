import { Formik, Form, Field } from 'formik';
import { addPublication } from 'services/publicationsApi';

export const CreatePublication = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addPublication(values);
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Formik initialValues={{ title: '', text: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field name="title" placeholder="Enter title" />
          <Field name="text" placeholder="Enter text" />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Adding' : 'Add publication'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

// values - это то что вводим в инпуты
// await addPublication(values); - вызов фу-и с передачей значений что бы запостить дынные в массив

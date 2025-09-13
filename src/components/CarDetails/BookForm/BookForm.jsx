import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import css from './BookForm.module.css';

export default function BookForm() {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    date: Yup.date(),
    comment: Yup.string(),
  });

  const handleSubmit = (values, actions) => {
    // dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={css.wrap}>
      <h3>Book your car now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <div className="form-group">
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className="input"
            />
            {/* <ErrorMessage name="name" component="div" className="error" /> */}
          </div>
          <label className={css.label}>
            Email
            <Field type="email" name="email" />
          </label>
          <label className={css.label}>
            Passowrd
            <Field type="date" name="bookingDate" />
          </label>
          <label className={css.label}>
            Passowrd
            <Field
              as="textarea"
              id="message"
              name="message"
              rows="4"
              placeholder="Comment"
            />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

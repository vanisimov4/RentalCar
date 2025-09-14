import { Formik, Form, Field, ErrorMessage } from 'formik';
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
          <div className={css.formGroup}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className="input"
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <Field
              type="email"
              name="email"
              placeholder="Email*"
              className="input"
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <Field
              type="date"
              name="bookingDate"
              placeholder="Booking date"
              className="input"
            />
            <ErrorMessage name="date" component="div" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className="input textarea"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
}

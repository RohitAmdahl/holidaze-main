import React from 'react';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import { BookingSchema } from '../../pages/specific/schema';
const initialValues = {
  dateFrom: '',
  dateTo: '',
  guests: '',
  venueId: id,
};
const BookingForm = () => {
  const dateToDMY = (date) => {
    return format(date, 'dd-MM-YYYY');
  };
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signInSchema,
    onSubmit: (values, action) => {
      const bookData = {
        dateFrom: values.dateFrom,
        dateTo: values.dateTo,
        guests: values.guests,
        venueId: values.venueId,
      };

      action.resetForm();
      console.log(bookData);
    },
  });
  return (
    <>
      <div></div>
      <div>
        <form action="">
          <div>
            <label htmlFor="dateFrom">Date From</label>
            <input
              value={values.dateFrom ? dateToYMD(values.dateFrom) : ''}
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor="dateTo">Date To</label>
            <input
              value={values.dateTo ? dateToYMD(values.dateTo) : ''}
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <div>
              <label htmlFor="dateFrom">Number of Guests</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.guests}
                id="guests"
                name="guests"
                type="number"
                min="1"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;

import React from 'react';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import { BookingSchema } from '../../pages/specific/schema';
import BookingCalender from './BookingCalender';
const initialValues = {
  dateFrom: '',
  dateTo: '',
  guests: '',
  venueId: 'id',
};
const BookingForm = () => {
  const dateToYMD = (date) => {
    return format(date, 'yyyy-MM-dd');
  };

  const handleDatesSelected = (selectedDates) => {
    // Update the form values with selected dates
    formik.setValues({
      ...formik.values,
      dateFrom: selectedDates.startDate,
      dateTo: selectedDates.endDate,
    });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: BookingSchema,
    onSubmit: (values, action) => {
      e.preventDefault();
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
      <div className="p-4">
        <BookingCalender onDatesSelected={handleDatesSelected} />
      </div>
      <div className="max-w-3xl items-center p-4 font-Montserrat">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap gap-3 lg:grid lg:grid-cols-2 lg:gap-2">
            <div>
              <label htmlFor="dateFrom">Date From</label>
              <input
                value={
                  formik.values.dateFrom
                    ? dateToYMD(formik.values.dateFrom)
                    : ''
                }
                name="dataFrom"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
            </div>
            <div>
              <label htmlFor="dateTo">Date To</label>
              <input
                value={
                  formik.values.dateTo ? dateToYMD(formik.values.dateTo) : ''
                }
                name="dataTo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="guests">Number of Guests</label>
            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.guests}
              className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
            />
            <p className=" text-red-700"> {formik.errors.guests} </p>
          </div>
          <div>
            <p className="font-semibold">Total</p>
            <p>
              <span className="text-lg font-bold text-blue">$100</span>
            </p>
          </div>
          <div className="my-4">
            <button className=" text-blue bg-orange font-Montserrat font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600">
              Book Your Venue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;

import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { format, isBefore } from 'date-fns';
import BookingCalender from './BookingCalender';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { AccommodationContext } from '../../api/accommodation/Context/DataContext';

const calculatePrice = (dateFrom, dateTo, pricePerNight) => {
  const start = new Date(dateFrom);
  const end = new Date(dateTo);
  if (!dateFrom || !dateTo) {
    return 0;
  }
  if (isNaN(start) || isNaN(end)) {
    return 0;
  }
  const timeDiff = Math.abs(end - start);
  const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const totalPrice = pricePerNight * numberOfNights;
  return totalPrice; // totalPrice*maxGuests we can also multiply  by maxGuests
};

const BookingForm = ({ price, maxGuests }) => {
  const { BookVenue } = useContext(AccommodationContext);

  const [amount, setAmount] = useState(0);

  const { id } = useParams();

  const BookingSchema = Yup.object().shape({
    dateFrom: Yup.date().required('Required'),
    dateTo: Yup.date().required('Required'),
    guests: Yup.number()
      .min(1, 'Must be at least 1 guest')
      .max(maxGuests, `Max number of guests is ${maxGuests}`)
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      dateFrom: '',
      dateTo: '',
      guests: '',
      venueId: id,
    },
    validationSchema: BookingSchema,

    //

    onSubmit: async (values, action) => {
      const bookData = {
        dateFrom: values.dateFrom,
        dateTo: values.dateTo,
        guests: values.guests,
        venueId: values.venueId,
      };
      action.resetForm();

      console.log(bookData);
      BookVenue(bookData);
      // try {
      //   if (isBefore(values.dateFrom, values.dateTo)) {
      //     if (isBefore(new Date(values.dateFrom), new Date())) {
      //       formik.setFieldError(
      //         'dateFrom',
      //         'Selected date cannot be in the past'
      //       );
      //     } else {
      //       // Make the API call and await its completion
      //       const response = await BookingFormFetch(bookData);
      //       console.log(response);
      //       if (!response.ok) {
      //         // Handle API error here
      //         console.error('Booking failed:', response.error);
      //         // You can set an error message or take other appropriate actions here
      //       } else {
      //         // API call successful, reset the form and do other actions
      //         action.resetForm();
      //         console.log('Booking successful');
      //       }
      //     }
      //   } else {
      //     formik.setFieldError(
      //       'dateFrom',
      //       'Start date must be before end date'
      //     );
      //   }
      // } catch (error) {
      //   console.error('Error during booking:', error);
      //   // Handle any unexpected errors here
      // }
    },
  });

  const dateToYMD = (date) => {
    return format(date, 'yyyy-MM-dd');
  };

  const handleDatesSelected = (selectedDates) => {
    formik.setValues({
      ...formik.values,
      dateFrom: selectedDates.startDate,
      dateTo: selectedDates.endDate,
    });
  };

  useEffect(() => {
    const newAmount = calculatePrice(
      formik.values.dateFrom,
      formik.values.dateTo,
      price,
      maxGuests
    );
    setAmount(newAmount);
  }, [formik.values.dateFrom, formik.values.dateTo, price, maxGuests]);

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
                name="dateFrom"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1 ${
                  formik.touched.dateFrom && formik.errors.dateFrom
                    ? 'border-red-500'
                    : ''
                }`}
              />
              {formik.touched.dateFrom && formik.errors.dateFrom && (
                <p className="text-red-500">{formik.errors.dateFrom}</p>
              )}
            </div>
            <div>
              <label htmlFor="dateTo">Date To</label>
              <input
                value={
                  formik.values.dateTo ? dateToYMD(formik.values.dateTo) : ''
                }
                name="dateTo"
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
            {formik.touched.guests && formik.errors.guests && (
              <p className="text-red-500">{formik.errors.guests}</p>
            )}
          </div>
          <div>
            <p className="font-semibold">Total</p>
            <p>
              <span className="text-lg font-bold text-blue">{`$${amount}`}</span>
            </p>
          </div>
          <div className="my-4">
            <button
              type="submit"
              className="text-blue mx-2 bg-orange font-Montserrat font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600"
            >
              Book Your Venue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;

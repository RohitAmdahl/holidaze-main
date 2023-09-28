import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { BASE_URL } from '../../constants/api';
import BookingRequest from '../../hooks/PostVenue';
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
// import BookingCalender from './BookingCalender';

// const calculatePrice = (dateFrom, dateTo, pricePerNight) => {
//   const start = new Date(dateFrom);
//   const end = new Date(dateTo);
//   if (!dateFrom || !dateTo) {
//     return 0;
//   }
//   if (isNaN(start) || isNaN(end)) {
//     return 0;
//   }
//   const timeDiff = Math.abs(end - start);
//   const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
//   const totalPrice = pricePerNight * numberOfNights;
//   return totalPrice; // totalPrice*maxGuests we can also multiply  by maxGuests
// };

const BookingForm = ({ price, maxGuests, data }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  const {
    data: PostDataResponse,
    loading,
    error,
    postData,
  } = BookingRequest(`${BASE_URL}/bookings`, []);
  const { id } = useParams();

  const initialValues = {
    dateFrom: null,
    dateTo: null,
    guests: '',
    venueId: id,
  };

  const handleSubmit = async (values) => {
    if (values.guests > maxGuests) {
      setErrorMaxGuests(true);
      return;
    }

    setErrorMaxGuests(false);
    const bookData = {
      dateFrom: format(values.dateFrom, 'yyyy-MM-dd'),
      dateTo: format(values.dateTo, 'yyyy-MM-dd'),
      guests: values.guests,
      venueId: values.venueId,
    };
    try {
      await postData(bookData);
      toast.success('Booking successful!', 'success', {
        position: 'bottom-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      console.error('Error during booking:', error);
    }
  };

  const validationSchema = Yup.object().shape({
    dateFrom: Yup.date().required('Required'),
    dateTo: Yup.date().required('Required'),
    guests: Yup.number()
      .min(1, 'Must be at least 1 guest')
      .max(maxGuests, `Max number of guests is ${maxGuests}`)
      .required('Required'),
  });

  const generateDisabledDates = () => {
    const today = new Date();
    const thirtyDaysFromNow = addDays(today, 30);

    const disabledDates = [];
    let currentDate = today;

    while (currentDate < thirtyDaysFromNow) {
      disabledDates.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    return disabledDates;
  };
  const disabledDates = generateDisabledDates();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleDatesSelected = ({ startDate, endDate }) => {
    formik.setFieldValue('dateFrom', startDate);
    formik.setFieldValue('dateTo', endDate);

    // Calculate the total amount based on selected dates and price
    if (startDate && endDate) {
      const daysDifference = Math.ceil(
        (endDate - startDate) / (1000 * 60 * 60 * 24)
      );

      setTotalDays(daysDifference);

      const newTotalAmount = daysDifference * price;
      setTotalAmount(newTotalAmount);
    }
  };

  return (
    <>
      <div className="max-w-xl container  items-center p-4 font-Montserrat">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap gap-3 lg:grid lg:grid-cols-2 lg:gap-2">
            <div>
              <label htmlFor="dateFrom">Date From</label>
              <DatePicker
                selected={formik.values.dateFrom}
                onChange={(date) => {
                  formik.setFieldValue('dateFrom', date);
                  handleDatesSelected({
                    startDate: date,
                    endDate: formik.values.dateTo,
                  });
                }}
                dateFormat="dd/MM/yyyy"
                placeholderText="Start Date"
                minDate={new Date()}
                isClearable={true}
                excludeDates={disabledDates}
                className="border border-red-800 px-4 py-2 rounded w-full"
              />
              {formik.touched.dateFrom && formik.errors.dateFrom && (
                <p className="text-red-500">{formik.errors.dateFrom}</p>
              )}
            </div>
            <div>
              <label htmlFor="dateTo">Date To</label>
              <DatePicker
                selected={formik.values.dateTo}
                onChange={(date) => {
                  formik.setFieldValue('dateTo', date);
                  handleDatesSelected({
                    startDate: formik.values.dateFrom,
                    endDate: date,
                  });
                }}
                dateFormat="dd/MM/yyyy"
                placeholderText="End Date"
                minDate={new Date()}
                excludeDates={disabledDates}
                isClearable={true}
                className="border border-red-800 px-4 py-2 rounded w-full"
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
            <p className="font-semibold">Total Days: {totalDays}</p>
            <p>
              <span className="text-lg font-bold text-blue">
                Total Amount: ${totalAmount}
              </span>
            </p>
          </div>
          <div className="my-4">
            <button
              type="submit"
              className="text-blue mx-2 bg-orange font-Montserrat font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600"
            >
              Book Your Venue
            </button>
            <div>
              {loading && <p>Booking in progress...</p>}
              {error && <p className="text-red-500">Error: {error}</p>}
              {PostDataResponse && (
                <p className=" py-3 text-green font-bold flex justify-center items-center text-xl ">
                  Booking successful make sure You check In your profile!{' '}
                  {PostDataResponse.bookingId}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default BookingForm;

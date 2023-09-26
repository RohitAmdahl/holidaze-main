import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-date-range/dist/styles.css'; // additional styles
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';
import { isSameDay } from 'date-fns';
import { useEffect } from 'react';

const BookingCalender = ({ onDatesSelected, bookedDates }) => {
  console.log(onDatesSelected);
  console.log(bookedDates);
  const [excludedDates, setExcludedDates] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  // useEffect(() => {
  //   const excludedDatesArray = [];
  //   console.log(excludedDatesArray);
  //   bookedDates.forEach((booking) => {
  //     const start = new Date(booking.dateFrom);
  //     const end = new Date(booking.dateTo);
  //     console.log('start:', start);
  //     console.log('end:', end);
  //     end.setDate(end.getDate() + 1);
  //     for (
  //       let day = new Date(start.getTime());
  //       day < end;
  //       day.setDate(day.getDate() + 1)
  //     ) {
  //       excludedDatesArray.push(new Date(day));
  //     }
  //   });
  //   console.log('excludedDatesArray:', excludedDatesArray);
  //   setExcludedDates(excludedDatesArray);
  // }, [bookedDates]);

  useEffect(() => {
    // Calculate excluded dates using filtering
    const excludedDatesArray = bookedDates.flatMap((booking) => {
      console.log('excludedDatesArray', excludedDatesArray);
      console.log('booking:', booking);
      const start = new Date(booking.dateFrom);
      const end = new Date(booking.dateTo);
      end.setDate(end.getDate() + 1); // Include the end date

      // Create an array of dates within the booking range
      const bookingDates = [];
      console.log(object);
      for (
        let day = new Date(start.getTime());
        day < end;
        day.setDate(day.getDate() + 1)
      ) {
        bookingDates.push(new Date(day));
      }

      return bookingDates;
    });

    setExcludedDates(excludedDatesArray);
  }, [bookedDates]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDatesSelected({ startDate: start, endDate: end });
  };

  // const minSelectableDate = new Date('2023-10-09');
  useEffect(() => {
    // Dynamically set the minimum selectable date to today
    const minSelectableDate = new Date();
    setStartDate(minSelectableDate);
  }, []);

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      startDate={startDate}
      endDate={endDate}
      minDate={startDate}
      selectsRange
      selectsStart
      inline
      excludeDates={excludedDates}
      dayClassName={(date) =>
        excludedDates.some((d) => isSameDay(date, d))
          ? 'react-datepicker__day--unavailable'
          : undefined
      }
    />
  );
};

export default BookingCalender;

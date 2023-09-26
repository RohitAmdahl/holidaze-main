import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-date-range/dist/styles.css'; // additional styles
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';
import { isSameDay } from 'date-fns';
import { useEffect } from 'react';

const BookingCalender = ({ onDatesSelected, bookedDates }) => {
  const [excludedDates, setExcludedDates] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const excludedDatesArray = [];
    console.log(excludedDatesArray);
    bookedDates.forEach((booking) => {
      const start = new Date(booking.dateFrom);
      const end = new Date(booking.dateTo);
      start.setDate(end.getDate() + 1);
      for (
        let day = new Date(start.getTime());
        day < end;
        day.setDate(day.getDate() + 1)
      ) {
        excludedDatesArray.push(new Date(day));
      }
    });

    setExcludedDates(excludedDatesArray);
  }, [bookedDates]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDatesSelected({ startDate: start, endDate: end });
  };

  useEffect(() => {
    const minSelectableDate = new Date();
    setStartDate(minSelectableDate);
  }, []);

  const isDateBooked = (date) => {
    return bookedDates.some((bookedDate) => {
      return (
        date >= new Date(bookedDate.dateFrom) &&
        date <= new Date(bookedDate.dateTo)
      );
    });
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      startDate={startDate}
      endDate={endDate}
      // excludeDates={excludedDates}
      minDate={startDate}
      selectsRange
      selectsStart
      inline
      dayClassName={(date) =>
        isDateBooked(date) ? 'react-datepicker__day--booked' : undefined
      }
      dayPickerProps={{
        modifiers: {
          disabled: (date) => isDayDisabled(date),
        },
      }}
    />
  );
};

export default BookingCalender;

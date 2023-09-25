import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-date-range/dist/styles.css'; // additional styles
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';
import { addDays, isSameDay, isBefore } from 'date-fns';
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
      end.setDate(end.getDate() + 1);
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

  const minSelectableDate = new Date();

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      startDate={startDate}
      endDate={endDate}
      minDate={minSelectableDate}
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

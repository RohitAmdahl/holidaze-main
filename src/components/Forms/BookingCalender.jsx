import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-date-range/dist/styles.css'; // additional styles
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import { useState } from 'react';

const BookingCalender = ({ onDatesSelected }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    onDatesSelected({ startDate: start, endDate: end });
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      startDate={startDate}
      endDate={endDate}
      excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
      selectsRange
      selectsStart
      inline
    />
  );
};

export default BookingCalender;

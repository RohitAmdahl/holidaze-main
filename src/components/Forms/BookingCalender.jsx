import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const BookingCalender = ({ props }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [excludedDates, setExcludedDates] = useState([]);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);

    setEndDate(end);

    console.log(onChange);
  };

  return (
    <DatePicker
      props={props}
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      excludeDates={[]}
      selectsRange
      selectsDisabledDaysInRange
      inline
    />
  );
};

export default BookingCalender;
// addDays(new Date(), 1), addDays(new Date(), 5);

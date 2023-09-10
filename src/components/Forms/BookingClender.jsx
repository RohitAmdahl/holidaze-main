import { useState } from 'react';

const BookingCalender = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [excludedDates, setExcludedDates] = useState([]);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
      selectsRange
      selectsDisabledDaysInRange
      inline
    />
  );
};

export default BookingCalender;

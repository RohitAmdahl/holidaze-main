import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import { useState } from 'react';

const BookingCalender = ({ onDatesSelected }) => {
  const today = new Date();

  const [range, setRange] = useState([
    {
      startDate: today,
      endDate: addDays(today, 0),
      key: 'selection',
    },
  ]);

  const handleDateChange = (item) => {
    setRange([item.selection]);
    onDatesSelected(item.selection); // Call the callback with selected dates
  };

  return (
    <DateRange
      // minDate={today} // Set the minimum selectable date to today
      date={today}
      months={1}
      direction="vertical"
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      ranges={range}
      onChange={handleDateChange}
    />
  );
};

export default BookingCalender;

import React, { useState } from 'react';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-date-range/dist/styles.css'; // additional styles
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';

const BookingCalender = ({ onDatesSelected, booking }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const minSelectableDate = new Date();

  const generateDisabledDates = () => {
    const dates = [];
    console.log(dates);
    booking?.forEach((bookings) => {
      const startDate = new Date(bookings.dateFrom);
      const endDate = new Date(bookings.dateTo);
      while (startDate <= endDate) {
        dates.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
      }
    });
    console.log(booking);
    console.log('Generated disabledDates:', dates);
    return dates;
  };
  const disabledDates = generateDisabledDates();
  console.log('generateDisabledDates:', generateDisabledDates);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    onDatesSelected({ startDate: start, endDate: end });
  };

  const isDateBlocked = (date) => {
    return disabledDates.some((blockedDate) => isDay(date, blockedDate));
  };
  console.log(' isDateBlocked', isDateBlocked);
  const isDay = (date) => {
    return (
      isDateBlocked.getFullYear() === date.getFullYear() &&
      isDateBlocked.getMonth() === date.getMonth() &&
      isDateBlocked.getDate() === date.getDate()
    );
  };
  console.log('isDay', isDay);
  //  statements
  console.log('disabledDates:', disabledDates);
  console.log('startDate:', startDate);

  const renderCustomDayContents = (day, dates) => {
    const isDisabled = isDateBlocked(dates);
    const customClassName = isDisabled ? 'custom-disabled-day' : '';

    return (
      <div className={`custom-day ${customClassName}`}>
        <span className={isDisabled ? 'disabled-date' : ''}>{day}</span>{' '}
      </div>
    );
  };

  const getDayClassName = (dates) => {
    return renderCustomDayContents(dates) ? 'excluded' : '';
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      startDate={startDate}
      endDate={endDate}
      minDate={minSelectableDate}
      excludeDates={disabledDates}
      selectsRange
      selectsStart
      inline
      renderDayContents={renderCustomDayContents}
      dayClassName={getDayClassName}
    />
  );
};

export default BookingCalender;

import React from 'react';

const MyBookings = ({ booking }) => {
  const { id, dateFrom, dateTo, guests, venue } = booking;

  const startDate = new Date(dateFrom);
  const endDate = new Date(dateTo);
  const startDateString = startDate.toLocaleDateString();
  const endDateString = endDate.toLocaleDateString();

  return (
    <div className="lg:max-w-4xl md:max-w-xl container mx-auto table-auto max-w-sm">
      <div className="p-2">
        <ul className="bg-gray-100 p-2 m-1">
          <li className="font-semibold"> Name: {venue.name}</li>
          <li>Date from: {startDateString}</li>
          <li>Date To: {endDateString}</li>
          <li> Max Guests: {guests}</li>
          <li className="font-bold"> IMPORTANT ID No: {id}</li>
        </ul>
      </div>
    </div>
  );
};

export default MyBookings;

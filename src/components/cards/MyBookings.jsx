import React from 'react';

const MyBookings = ({ booking }) => {
  console.log(booking);
  return <div> {booking.id} </div>;
};

export default MyBookings;

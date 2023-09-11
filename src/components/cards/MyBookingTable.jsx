import React from 'react';
import { Link } from 'react-router-dom';
const MyBookings = ({ booking }) => {
  console.log(booking);
  return <div> {booking.id} </div>;
};

export default MyBookings;

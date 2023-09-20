import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/api';
import BookingCalender from '../../components/Forms/BookingCalender';
const AllBookings = () => {
  const [bookedDates, setBookedDates] = useState([]);
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/bookings`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching booking data:', response.status);
        }

        const bookingData = await response.json();
        console.log(bookingData);

        setBookedDates(bookingData);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [accessToken]);

  return (
    <div>
      <BookingCalender
        bookedDates={bookedDates}
        onDatesSelected={handleDateSelection}
      />

      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>Booking ID: {booking.id}</p>
        </div>
      ))}
    </div>
  );
};

export default AllBookings;

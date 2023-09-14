import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/api';
console.log(BASE_URL);

const BookVenue = ({ bookData }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      setError(null);

      const accessToken = localStorage.getItem('accessToken');
      try {
        console.log(accessToken);
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(bookData),
        };
        const response = await fetch(
          `https://api.noroff.dev/api/v1/holidaze/bookings`,
          requestOptions
        );
        console.log(response);
        if (!response.ok) {
          throw new Error('BookingFetch failed with status:', response.status);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('BookingFetch:', error.message);
        setError(error);
      }
    };

    fetchBookingData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>; // Render an error message
  }

  return { data, error }; // Render content when request is successful
};

export default BookVenue;

import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/api';
console.log(BASE_URL);

const BookingFormFetch = ({ bookData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      setLoading(true);
      setError(null);

      const accessToken = localStorage.getItem('accessToken');
      try {
        console.log(accessToken);
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          Authorization: `Bearer ${accessToken}`,
          body: JSON.stringify(bookData),
        };
        const response = await fetch(`${BASE_URL}/bookings`, requestOptions);
        if (!response.ok) {
          throw new Error(`BookingFetch failed with status ${response.status}`);
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('BookingFetch:', error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render an error message
  }

  return <div>API request completed successfully</div>; // Render content when request is successful
};

export default BookingFormFetch;

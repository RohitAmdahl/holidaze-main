import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/api';
import { useParams } from 'react-router-dom';
const GetCalenderDisableBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { id } = useParams();

  async function getBookingData() {
    try {
      const accessToken = localStorage.getItem('accessToken');
      console.log(accessToken);
      const response = await fetch(`${BASE_URL}/bookings/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      const profileData = await response.json();
      setBookings(profileData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBookingData();
  }, [id]);

  return bookings;
};

export default GetCalenderDisableBookings;

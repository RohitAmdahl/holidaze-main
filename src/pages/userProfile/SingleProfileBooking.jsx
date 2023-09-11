import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/api';
import { ClimbingBoxLoader } from 'react-spinners';

console.log(BASE_URL);
const SingleProfileByNameBookings = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getDataProfile() {
      const accessToken = localStorage.getItem('accessToken');
      const username = localStorage.getItem('userName');
      try {
        setError(false);
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/profiles/${username}/bookings`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) {
          const errorMessage = await response.json();
          throw new Error(errorMessage.message);
        }

        const profileData = await response.json();

        setData(profileData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getDataProfile();
  }, []);

  if (isLoading && !data.length) {
    return (
      <div className=" flex justify-center items-center mt-3 mb-3 ">
        <ClimbingBoxLoader size={15} color="#6E7A55" />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map((booking) => {
        console.log(booking);
        return <MyBookingTable />;
      })}
    </div>
  );
};

export default SingleProfileByNameBookings;

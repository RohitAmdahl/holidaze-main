import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/api';
import { ClimbingBoxLoader } from 'react-spinners';
import MyBookings from '../../components/cards/MyBookingTable';

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
          `${BASE_URL}/profiles/${username}?_bookings=true&_venues=true`,
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
        const profileArray = profileData.bookings;
        // setData(profileData);
        setData(profileArray);
        console.log(profileArray);
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
    <>
      <div className="Text-lg text-blue font-semibold">
        Please Contact Us For any Query : +47 452 256
      </div>
      <div>
        {data.map((booking) => {
          console.log(booking);
          return <MyBookings key={booking.id} booking={booking} />;
        })}
      </div>
    </>
  );
};

export default SingleProfileByNameBookings;

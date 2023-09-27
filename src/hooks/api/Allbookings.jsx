import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/api';
import { ClimbingBoxLoader } from 'react-spinners';
import CustomerCard from '../../components/cards/CustomerCard';

const AllBookings = () => {
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
          `${BASE_URL}/profiles/${username}/venues?_bookings=true&_owner=true`,
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

        const profileArray = profileData[0].bookings;

        setData(profileArray);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getDataProfile();
  }, []);

  if (isLoading && !data.length == 0) {
    return (
      <div className="flex justify-center items-center mt-3 mb-3">
        <ClimbingBoxLoader size={15} color="#6E7A55" />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div>
        <p className="Text-lg text-red-500 font-semibold">
          There is no up coming bookings.
        </p>
        <div className="Text-lg text-blue font-semibold">
          Please Contact Us For any Query: +47 452 256
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <CustomerCard key={data.id} bookings={data} />
    </>
  );
};

export default AllBookings;

import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/api';
import { ClimbingBoxLoader } from 'react-spinners';

import MyBookings from '../../components/cards/MyBookingTable';
import { format } from 'date-fns';

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

        // Log the received data
        console.log('upcoming Bookings:', profileArray);

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
          There are up coming bookings.
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
      <div className="Text-lg text-blue font-semibold">
        Please Contact Us For any Query: +47 452 256
      </div>
      <div className=" overflow-x-auto ">
        <table className=" container mx-auto border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-300">Date From</th>
              <th className="px-4 py-2 bg-gray-300">Date To</th>
              <th className="px-4 py-2 bg-gray-300">Guests</th>
            </tr>
          </thead>
          <tbody>
            {data.map((booking) => (
              <tr key={booking.id}>
                <td className="px-4 py-2 text-center  ">
                  {format(new Date(booking.dateFrom), 'MM/dd/yyyy')}
                </td>
                <td className="px-4 py-2  text-center">
                  {format(new Date(booking.dateTo), 'MM/dd/yyyy')}
                </td>
                <td className="px-4 py-2 text-center ">{booking.guests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllBookings;

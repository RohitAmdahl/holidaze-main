import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/api';
import { ClimbingBoxLoader } from 'react-spinners';
import VenueByProfileCard from '../../components/cards/VenueByProfileCard';
console.log(BASE_URL);
const VenueCreatedByProfile = () => {
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
          `${BASE_URL}/profiles/${username}/venues`,
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
        console.log(response);
        const profileData = await response.json();
        console.log(profileData);
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
    <div className="grid grid-cols-3 gap-3">
      {data.map((venue) => {
        console.log(venue);
        return <VenueByProfileCard key={venue.id} venue={venue} />;
      })}
    </div>
  );
};

export default VenueCreatedByProfile;

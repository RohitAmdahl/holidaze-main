import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/api';
import { ClimbingBoxLoader } from 'react-spinners/';
import VenueByProfileCard from '../../components/cards/VenueByProfileCard';

const VenueCreatedByProfile = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleDelete = (deletedVenueId) => {
    // Filter out the deleted venue from the data state
    setData((prevData) =>
      prevData.filter((venue) => venue.id !== deletedVenueId)
    );
  };
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
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
      {data.map((venue) => {
        return (
          <VenueByProfileCard
            key={venue.id}
            venue={venue}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default VenueCreatedByProfile;

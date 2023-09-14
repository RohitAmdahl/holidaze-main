import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/api';
import { useParams } from 'react-router-dom';
import Details from '../components/details/DetailsPage';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const VenueDetails = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  let { id } = useParams();
  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData(`${BASE_URL}/venues/${id}?_owner=true&_bookings=true`);
  }, [id]);
  if (isLoading || !data) {
    return (
      <div className=" flex justify-center items-center mt-3 mb-3 ">
        <ClimbingBoxLoader size={15} color="#6E7A55" />
      </div>
    );
  }
  if (error) {
    <div>Error: {error}</div>;
  }

  return (
    <div>
      <Details key={data.id} data={data} />;
    </div>
  );
};

export default VenueDetails;

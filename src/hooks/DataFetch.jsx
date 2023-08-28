import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/api";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Card from "../components/cards/Card";

// console.log(BASE_URL);
const DataFetch = () => {
  const [venues, setVenues] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const response = await fetch(`${BASE_URL}`);
        console.log(response);
        const data = await response.json();
        console.log(data);
        setVenues(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center mt-3 mb-3 ">
        <ClimbingBoxLoader size={15} color="#6E7A55" />
      </div>
    );
  }
  if (error) {
    return <div>error</div>;
  }

  return (
    <div>
      {venues.map((place) => {
        return <Card key={place.id} place={place} />;
      })}
    </div>
  );
};

export default DataFetch;

import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/api";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Card from "../components/cards/Card";

// console.log(BASE_URL);
const DataFetch = () => {
  const [venues, setVenues] = useState([]);
  const [isLoading, setLoading] = useState(true);
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

  if (isLoading && !venues.length) {
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
    <div className=" flex flex-col  justify-center items-center gap-5 p-2 md:grid-cols-2 md:grid md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:container lg:max-w-4xl lg:mx-auto ">
      {venues.map((place) => {
        return (
          <div className="container mx-auto">
            <Card key={place.id} place={place} />
          </div>
        );
      })}
    </div>
  );
};

export default DataFetch;

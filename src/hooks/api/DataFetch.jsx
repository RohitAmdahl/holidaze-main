import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/api';
import Card from '../../components/cards/Card';
import VenueSearch from '../../components/search/Search';
import { ClockLoader } from 'react-spinners/';
const DataFetch = () => {
  const [venues, setVenues] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setLoading(true);

        const response = await fetch(
          `${BASE_URL}/venues?sort=created&sortOrder=desc&&_owner=true&_bookings=true`
        );

        const data = await response.json();

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
        <ClockLoader size={15} color="#6E7A55" />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const filteredVenues = venues.filter(
    (place) =>
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.location.country.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <VenueSearch onSearch={setSearch} />
      <div className="container max-w-sm p-10 md:max-w-xl lg:max-w-4xl mx-auto">
        {filteredVenues?.length > 0 ? (
          <div className="grid grid-cols-1 gap-10 mx-auto max-w-4xl md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8">
            {filteredVenues.map((place) => {
              return <Card key={place.id} place={place} />;
            })}
          </div>
        ) : (
          <div className="mx-auto text-center text-4xl font-bold ">
            There is no Venues 🧳 found in our website.
          </div>
        )}
      </div>
    </>
  );
};

export default DataFetch;

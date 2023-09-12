import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/api';
console.log(BASE_URL);
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import Card from '../components/cards/Card';
import VenueSearch from '../components/search/Search';
import ReactPaginate from 'react-paginate';
// import { handlePageClick } from '../utils/helpers/function';
// export const handlePageClick = (event) => {

//   console.log(
//     `User requested page number ${event.selected}, which is offset ${newOffset}`
//   );
//   setItemOffset(newOffset);
// };
const DataFetch = () => {
  const [venues, setVenues] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  // const [currentPage, setCurrentPage] = useState(() => {
  // });
  //  &limit=${limit}&offset=${offset}
  // const limit = 10;
  // const offset = (currentPage - 1) * limit;
  // const pageCount = Math.ceil(venues.length / limit);

  // const handlePageClick = (event) => {
  //   const newPage = event.selected + 1;
  //   console.log('clicked');
  //   setCurrentPage(newPage);
  // };

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setLoading(true);

        const response = await fetch(
          ` ${BASE_URL}/venues?_owner=true&_bookings=true`
        );
        console.log(response);
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
        <ClimbingBoxLoader size={15} color="#6E7A55" />
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
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount} // Pass the calculated pageCount
        previousLabel="< previous"
        marginPagesDisplayed={3}
        renderOnZeroPageCount={null}
      /> */}
    </>
  );
};

export default DataFetch;

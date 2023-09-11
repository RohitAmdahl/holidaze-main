import React from 'react';
import { Link } from 'react-router-dom';

const VenueByProfileCard = ({ venue }) => {
  console.log(venue);
  const { id, name, media, location, price, maxGuests } = venue;
  return (
    <Link to={`/venues/${id}`}>
      <div> {name} </div>
    </Link>
  );
};

export default VenueByProfileCard;

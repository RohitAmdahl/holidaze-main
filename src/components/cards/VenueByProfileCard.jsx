import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
const VenueByProfileCard = ({ venue }) => {
  console.log(venue);
  const { id, name, media, location, price, maxGuests } = venue;
  return (
    <div className="">
      <Carousel showStatus={false} showThumbs={false}>
        {media.map((imageUrl, index) => (
          <div key={index.id} index={index}>
            <img
              className=" object-cover mx-auto  h-52"
              src={imageUrl ? imageUrl : placeHolder}
              alt={name}
            />
          </div>
        ))}
      </Carousel>
      <Link to={`/venues/${id}`}>
        <div className="mt-1 p-2">
          <h2 className="text-slate-700 font-semibold capitalize"> {name} </h2>
          <p className="text-slate-700 mt-1 text-sm flex gap-1 items-center ">
            {location.country}, {location.city}
          </p>
          <p className="text-slate-700 mt-1 text-sm flex gap-1 items-center ">
            maxGuests {maxGuests}
          </p>
          <div className="mt-3 flex items-end justify-between">
            <p>
              <span className="text-lg font-bold text-blue">${price}</span>
              <span className="text-blue text-sm">/night</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VenueByProfileCard;

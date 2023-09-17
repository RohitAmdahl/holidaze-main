import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import placeHolder from '../../assets/300.png';
import { RiDeleteBinLine } from 'react-icons/ri';

import EditForm from '../Forms/EditForm';
const VenueByProfileCard = ({ venue }) => {
  const { id, name, media, location, price, maxGuests } = venue;
  return (
    <div className="">
      <Carousel showStatus={false} showThumbs={false}>
        {media.map((imageUrl, index) => (
          <div key={`media-${index}`}>
            <img
              className=" object-cover mx-auto  h-52"
              src={imageUrl ? imageUrl : placeHolder}
              alt={name}
            />
          </div>
        ))}
      </Carousel>
      <div className="px-2 my-5 flex justify-end items-end">
        <button className=" cursor-pointer bg-gray-100 p-2 mx-2 rounded-full">
          <EditForm />
        </button>
        <button className=" cursor-pointer bg-gray-100 text-red-600 p-2 mx-2 rounded-full">
          <RiDeleteBinLine size={25} />
        </button>
      </div>
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

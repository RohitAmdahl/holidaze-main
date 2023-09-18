import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import placeHolder from '../../assets/300.png';
import { RiDeleteBinLine } from 'react-icons/ri';

import EditForm from '../Forms/EditForm';
const VenueByProfileCard = ({ venue }) => {
  const { id, name, media, location } = venue;
  return (
    <div className=" lg:border-r-2 lg:px-3 border-b-2 ">
      <Carousel showStatus={false} showThumbs={false}>
        {media.map((imageUrl, index) => (
          <div key={`media-${index}`}>
            <img
              className=" object-cover mx-auto  h-52 rounded-xl"
              src={imageUrl ? imageUrl : placeHolder}
              alt={name}
            />
          </div>
        ))}
      </Carousel>
      <div className="px-2 mt-3 flex justify-end items-end ">
        <div className="bg-gray-100 p-2 mx-1 rounded-xl shadow-xl   ">
          <EditForm venue={venue} />
        </div>

        <button className=" cursor-pointer  bg-gray-100 text-red-600 p-2 mx-2 rounded-full">
          <RiDeleteBinLine size={25} />
        </button>
      </div>
      <Link to={`/venues/${id}`}>
        <div className="mt-1 p-2 hover:text-blue hover:underline">
          <h2 className="text-slate-700 font-semibold capitalize"> {name} </h2>
          <p className="text-slate-700 mt-1 text-sm flex gap-1 items-center ">
            {location.country}, {location.city}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VenueByProfileCard;

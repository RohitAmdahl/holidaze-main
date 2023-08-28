import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CiLocationOn } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Card = ({ place }) => {
  // const { id, name, rating, media, title, maxGuests, location } = place;
  const { id, name, media, location, price, maxGuests, rating } = place;
  console.log(place);
  return (
    <div className=" container max-w-4xl mx-auto ">
      <div className=" p-3 border-2 border-gray-100">
        <div className="relative flex items-end overflow-hidden ">
          <Carousel showStatus={false} showThumbs={false}>
            {media.map((imageUrl, index) => (
              <div key={index}>
                <img
                  className=" object-cover mx-auto max-w-xs h-52"
                  src={imageUrl ? imageUrl : <img src={logo} alt="" />}
                  alt={name}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <Link to={`/Venues/${id}`}>
          <div className="mt-1 p-2">
            <h2 className="text-slate-700"> {name} </h2>
            <p className="text-slate-700 mt-1 text-sm flex gap-1 items-center ">
              <CiLocationOn /> {location.country}, {location.city}
            </p>
            <p className="text-slate-700 mt-1 text-sm flex gap-1 items-center ">
              <IoIosPeople size={20} /> maxGuests {maxGuests}
            </p>
            <div className="mt-3 flex items-end justify-between">
              <p>
                <span className="text-lg font-bold text-blue">${price}</span>
                <span className="text-blue text-sm">/night</span>
              </p>
            </div>
          </div>
          <input
            className=" text-blue bg-orange font-Montserrat font-bold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            type="button"
            role="button"
            value="View"
          />
        </Link>
      </div>
    </div>
  );
};

export default Card;

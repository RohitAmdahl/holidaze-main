import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosPeople } from 'react-icons/io';
import { GiHotMeal } from 'react-icons/gi';
import { PiDogLight } from 'react-icons/pi';
import { AiOutlineWifi } from 'react-icons/ai';
import { LuParkingCircle } from 'react-icons/lu';
import { BsStarFill } from 'react-icons/bs';
const DetailsPage = ({ data }) => {
  const {
    name,
    price,
    media,
    location,
    maxGuests,
    meta,
    rating,
    description,
    owner,
  } = data;

  const isAvailable = meta.breakfast === true || meta.breakfast === 'true';
  const petsAvailable = meta.pets === true || meta.pets === 'true';
  const lineWifi = meta.wifi === true || meta.pets === 'true';
  const parkingCircle = meta.parking === true || meta.pets === 'true';
  return (
    <>
      <div className=" container max-w-4xl mx-auto font-Montserrat overflow-hidden ">
        <div className="flex justify-between items-center max-w-2xl p-2 mx-auto border-b-2  pt-4">
          <h1 className=" text-lg font-bold"> {name} </h1>
          <div className="flex justify-between items-center gap-2">
            <img
              className="w-10 h-10 bg-black rounded-full"
              src={owner.avatar}
              alt={owner.name}
            />
            <div className="flex flex-col">
              <span>{owner.name}</span>
              <span>{owner.email}</span>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-end justify-between p-1">
          <p>
            <span className="text-lg font-bold text-blue">${price}</span>
            <span className="text-blue text-sm ">/night</span>
          </p>
        </div>
        <div className="grid grid-cols-2 p-3 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-3">
          {media.map((img, index) => {
            return (
              <div
                className="flex justify-center items-center flex-wrap rounded-xl  "
                key={index}
              >
                <img className="" src={img} alt="" />
              </div>
            );
          })}
        </div>
        <div className="flex">
          <ul className="flex flex-col p-2">
            <li className="flex items-center gap-2">
              <CiLocationOn size={20} /> {location.address}, {location.city}{' '}
              {location.country}.
            </li>
            <li className="flex items-center gap-2">
              <IoIosPeople size={20} /> Maximum for {maxGuests} people.
            </li>
            <li className="flex  items-center gap-2">
              <GiHotMeal /> {isAvailable ? 'Breakfast include' : 'NO Breakfast'}
            </li>
            <li className="flex  items-center gap-2">
              <PiDogLight />{' '}
              {petsAvailable ? ' Pets Allowed' : 'Pets NOT allowed'}
            </li>
            <li className="flex  items-center gap-2">
              <AiOutlineWifi /> {lineWifi ? ' We have Network' : 'NO Wifi'}
            </li>
            <li className="flex  items-center gap-2">
              <LuParkingCircle />
              {parkingCircle ? 'Parking Yes' : 'NO Parking'}
            </li>
            <li className="flex items-center gap-2 w-36  text-blue">
              <BsStarFill color="#fcef00" /> Rating {rating}
            </li>
          </ul>
        </div>
        <div className="border-t-2 pt-5">
          <h2 className="p-2 font-Montserrat font-semibold">
            Description about place{' '}
          </h2>
          <p className=" max-w-3xl p-2 ">{description}</p>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;

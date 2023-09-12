import React, { useContext } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosPeople } from 'react-icons/io';
import { GiHotMeal } from 'react-icons/gi';
import { PiDogLight } from 'react-icons/pi';
import { AiOutlineWifi } from 'react-icons/ai';
import { LuParkingCircle } from 'react-icons/lu';
import { BsStarFill, BsArrowRight } from 'react-icons/bs';
import { AuthContext } from '../../auth/context/Context';
import { Link } from 'react-router-dom';
// import BookingCalender from '../Forms/BookingCalender';
import BookingForm from '../Forms/BookingForm';
const DetailsPage = ({ data }) => {
  const { state } = useContext(AuthContext);
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
  console.log(data);
  console.log(meta);

  const isAvailable = meta.breakfast === true || meta.breakfast === 'true';
  const petsAvailable = meta.pets === true || meta.pets === 'true';
  const lineWifi = meta.wifi === true || meta.wifi === 'true';
  const parkingCircle = meta.parking === true || meta.parking === 'true';

  return (
    <>
      <div className=" container max-w-4xl mx-auto font-Montserrat overflow-hidden ">
        <div className="flex justify-between flex-wrap items-center max-w-2xl p-2 mx-auto border-b-2  pt-4">
          <h1 className=" text-lg font-bold uppercase p-2"> {name} </h1>
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
        <div className="grid grid-cols-1 p-3 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 ">
          {media.map((img, index) => {
            return (
              <div
                className=" flex justify-center items-center flex-wrap rounded-xl  "
                key={`media-${index}`}
              >
                <img src={img} alt={name} className=" flex flex-wrap " />
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
          <p className=" max-w-3xl p-2  border-b-2 py-4">{description}</p>
        </div>
        {!state.isAuthenticated ? (
          <>
            <div className=" container mx-auto text-2xl border-t-2 py-4 my-4">
              <h3 className="text-blue ">Please Login for Booking</h3>
              <Link
                type="button"
                className="my-8 text-blue bg-orange font-Montserrat font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600"
                to="/signIn"
              >
                Click Here <BsArrowRight size={20} />
              </Link>
            </div>
          </>
        ) : (
          <div className="my-5">
            <BookingForm />
          </div>
        )}
      </div>
    </>
  );
};

export default DetailsPage;

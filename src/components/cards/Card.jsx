import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosPeople } from 'react-icons/io';
import { Link } from 'react-router-dom';
import noImg from '../../assets/photo_2.jpg';
console.log(noImg);
const Card = ({ place }) => {
  const { id, name, media, location, price, maxGuests } = place;

  return (
    <div className=" container max-w-4xl mx-auto font-Montserrat">
      <div className=" overflow-hidden ">
        <Carousel showStatus={false} showThumbs={false}>
          {/* {media.map((imageUrl, index) => (
            <div className="" key={`media-${index}`}>
              <img
                className=" object-cover mx-auto rounded-2xl  h-52"
                src={imageUrl || noImg}
                alt={name}
              />
            </div>
          ))} */}
          {media.map((imageUrl, index) => (
            <div key={`media-${index}`}>
              {imageUrl ? (
                <img
                  className="object-cover mx-auto rounded-2xl h-52"
                  src={imageUrl}
                  alt={name}
                />
              ) : (
                <img
                  className="object-cover mx-auto rounded-2xl h-52"
                  src={noImg}
                  alt={name}
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>
      <Link to={`/Venues/${id}`}>
        <div className="mt-1 p-2 hover:text-blue hover:underline cursor-pointer ">
          <h2 className="text-slate-700 font-semibold capitalize"> {name} </h2>
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
        {/* <input
            className=" m-2 text-blue bg-orange font-Montserrat font-bold  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            type="button"
            role="button"
            value="View"
          /> */}
      </Link>
    </div>
  );
};

export default Card;

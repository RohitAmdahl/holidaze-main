import React from 'react';
import { AiOutlineWifi } from 'react-icons/ai';
import { GiHotMeal } from 'react-icons/gi';
import { LuParkingCircle } from 'react-icons/lu';
import { MdPets } from 'react-icons/md';

const CreateListing = () => {
  return (
    <>
      <div className=" font-Montserrat text-xl font-bold">
        <h1>Post Venue </h1>
      </div>
      <form>
        <div className="grid">
          <div className="grid grid-cols-3 gap-3">
            <div className="py-3 col-span-2">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  focus:ring-blue focus:border-blue"
                id="grid-first-name"
                type="text"
                name="name"
                placeholder="Name of the Venue"
              />
            </div>
            <div className="py-3 ">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2 "
                htmlFor="price per night"
              >
                price per night
              </label>

              <input
                className="appearance-none block w-full bg-gray-100  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  focus:ring-blue focus:border-blue"
                id="number"
                type="number"
                name="price"
                placeholder="price per night"
              />
            </div>
            <div className="py-3 col-span-3 ">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2 "
                htmlFor="Upload Picture"
              >
                Upload Picture
              </label>

              <input
                className="appearance-none block w-full bg-gray-100  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-blue focus:border-blue"
                id="number"
                type="url"
                name="picture"
                placeholder="Image Url"
              />
            </div>
            <div className="col-span-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2 "
                htmlFor="description"
              >
                description
              </label>
              <textarea
                id="message"
                rows="4"
                name="description"
                className="block p-2.5 w-full text-sm bg-gray-100 focus:bg-white rounded-lg border border-gray-300 focus:ring-blue focus:border-blue  "
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="py-3 ">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2 "
                htmlFor="address"
              >
                Address
              </label>

              <input
                className="appearance-none block w-full bg-gray-100  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-blue focus:border-blue"
                id="Address"
                type="Address"
                name="Address"
                placeholder=" Your Venue Address"
              />
            </div>
            <div className="py-3 ">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2 "
                htmlFor="country"
              >
                Country
              </label>

              <input
                className="appearance-none block w-full bg-gray-100  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-blue focus:border-blue"
                id="country"
                type="country"
                name="country"
                placeholder=" Country"
              />
            </div>
            <div className="py-3 ">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2 "
                htmlFor="city"
              >
                City
              </label>

              <input
                className="appearance-none block w-full bg-gray-100  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-blue focus:border-blue"
                id="city"
                type="city"
                name="city"
                placeholder="  City"
              />
            </div>
            <div className="py-3 ">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2 "
                htmlFor="zip code"
              >
                Zip code
              </label>

              <input
                className="appearance-none block w-full bg-gray-100  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-blue focus:border-blue"
                id="zip"
                type="zip"
                name="zip"
                placeholder="Zip code"
              />
            </div>
            <div className="py-3 ">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2 "
                htmlFor="continent"
              >
                Continent
              </label>

              <input
                className="appearance-none block w-full bg-gray-100  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-blue focus:border-blue"
                id="continent"
                type="continent"
                name="continent"
                placeholder="continent"
              />
            </div>
            <div className="py-3 ">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2 "
                htmlFor="max guest"
              >
                Max Guest
              </label>

              <input
                className="appearance-none block w-full bg-gray-100  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-blue focus:border-blue"
                id="continent"
                type="number"
                name="maxGuest"
              />
            </div>
          </div>
          <div className="grid">
            <div
              role="group"
              aria-labelledby="checkbox-group"
              className="flex justify-around gap-2 flex-wrap"
            >
              <div>
                <input type="checkbox" name="wifi" value="wifi" />
                <label htmlFor="wifi">Wifi</label>
              </div>
              <div>
                <input type="checkbox" name="breakfast" value="breakfast" />
                <label htmlFor="breakfast">Breakfast</label>
              </div>
              <div>
                <input type="checkbox" name="parking" value="parking" />
                <label htmlFor="parking">Parking</label>
              </div>

              <div>
                <input type="checkbox" name="pets" value="pets" />
                <label htmlFor="pets">Pets</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateListing;

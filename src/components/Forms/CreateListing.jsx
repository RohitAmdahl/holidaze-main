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
          <div className="flex flex-col flex-wrap lg:grid lg:grid-cols-3 lg:gap-3 ">
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
          <h2 className="text-lg py-6 font-bold">
            Venue Service provided by Host
          </h2>
          <div className="p-4">
            <div
              role="group"
              aria-labelledby="checkbox-group"
              className="flex justify-around gap-2 flex-wrap"
            >
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  name="wifi"
                  value="wifi"
                  className="border-orange rounded text-blue-600 focus:ring-blue-500      cursor-pointer  ring-2 ring-blue-500/50 ring-offset-2"
                />
                <label htmlFor="wifi">Wifi</label>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  name="breakfast"
                  value="breakfast"
                  className="border-orange rounded text-blue-600 focus:ring-blue-500      cursor-pointer  ring-2 ring-blue-500/50 ring-offset-2"
                />
                <label htmlFor="breakfast">Breakfast</label>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  name="parking"
                  value="parking"
                  className="border-orange rounded text-blue-600 focus:ring-blue-500      cursor-pointer  ring-2 ring-blue-500/50 ring-offset-2"
                />
                <label htmlFor="parking">Parking</label>
              </div>

              <div className="flex gap-3">
                <input
                  type="checkbox"
                  name="pets"
                  value="pets"
                  className="border-orange rounded text-blue-600 focus:ring-blue-500      cursor-pointer  ring-2 ring-blue-500/50 ring-offset-2"
                />
                <label htmlFor="pets">Pets</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-6">
          <button
            className=" text-blue bg-orange font-Montserrat font-bold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="Submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateListing;

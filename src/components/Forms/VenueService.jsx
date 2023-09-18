import React from 'react';
import { AiOutlineWifi } from 'react-icons/ai';
import { GiHotMeal } from 'react-icons/gi';
import { LuParkingCircle } from 'react-icons/lu';
import { MdPets } from 'react-icons/md';
const VenueService = ({ formik }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg py-6 font-bold">Venue Service provided by Host</h2>
      <div
        role="group"
        aria-labelledby="checkbox-group"
        className="flex justify-around gap-2 flex-wrap"
      >
        <div className="flex gap-3">
          <input
            type="checkbox"
            id="wifi"
            name="meta.wifi"
            className="border-orange rounded text-blue-600 focus:ring-blue-500 cursor-pointer ring-2 ring-blue-500/50 ring-offset-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.meta.wifi}
          />
          <label htmlFor="wifi" className="flex items-center">
            <AiOutlineWifi /> Wifi
          </label>
        </div>
        <div className="flex gap-3">
          <input
            type="checkbox"
            id="breakfast"
            name="meta.breakfast"
            className="border-orange rounded text-blue-600 focus:ring-blue-500 cursor-pointer ring-2 ring-blue-500/50 ring-offset-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.meta.breakfast}
          />
          <label htmlFor="breakfast" className="flex items-center">
            <GiHotMeal /> Breakfast
          </label>
        </div>
        <div className="flex gap-3">
          <input
            type="checkbox"
            id="parking"
            name="meta.parking"
            className="border-orange rounded text-blue-600 focus:ring-blue-500 cursor-pointer ring-2 ring-blue-500/50 ring-offset-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.meta.parking}
          />
          <label htmlFor="parking" className="flex items-center">
            <LuParkingCircle /> Parking
          </label>
        </div>
        <div className="flex gap-3">
          <input
            type="checkbox"
            id="pets"
            name="meta.pets"
            className="border-orange rounded text-blue-600 focus:ring-blue-500 cursor-pointer ring-2 ring-blue-500/50 ring-offset-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.meta.pets}
          />
          <label htmlFor="pets" className="flex items-center">
            <MdPets /> Pets
          </label>
        </div>
      </div>
    </div>
  );
};

export default VenueService;

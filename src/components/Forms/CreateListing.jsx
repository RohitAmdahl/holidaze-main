import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineWifi } from 'react-icons/ai';
import { GiHotMeal } from 'react-icons/gi';
import { LuParkingCircle } from 'react-icons/lu';
import { MdPets } from 'react-icons/md';
import { venueSchema } from './validationSchema';
import { initialValues } from './formInitialValues';

const CreateListing = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: venueSchema,
    onSubmit: (values, action) => {
      const venueFormData = {
        name: values.name,
        description: values.description,
        media: values.picture,
        price: values.price,
        maxGuests: values.maxGuests,
        meta: {
          wifi: values.meta.wifi,
          parking: values.meta.parking,
          breakfast: values.meta.breakfast,
          pets: values.meta.pets,
        },
        location: {
          address: values.address,
          city: values.city,
          zip: values.zip,
          country: values.country,
          continent: values.continent,
        },
      };
      action.resetForm();
      console.log(venueFormData);
    },
  });

  return (
    <div>
      <h1 className="font-Montserrat text-xl font-bold">Post Venue</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="py-3">
          <label
            htmlFor="name"
            className="block uppercase tracking-wide text-xs font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name of the Venue"
            className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">
              <p>{formik.errors.name} </p>
            </div>
          ) : null}
        </div>

        {/* Price */}
        <div className="py-3">
          <label
            htmlFor="price"
            className="block uppercase tracking-wide text-xs font-bold mb-2"
          >
            Price per night
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price per night"
            className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-red-500">
              <p>{formik.errors.price}</p>
            </div>
          ) : null}
        </div>

        <div className="py-3">
          <label
            htmlFor="media"
            className="block uppercase tracking-wide text-xs font-bold mb-2"
          >
            Upload Picture
          </label>
          <input
            type="url"
            id="media"
            name="media[0]"
            placeholder="Image URL"
            className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.media[0]}
          />
          {formik.touched.media && formik.errors.media ? (
            <div className="text-red-500">
              <p>{formik.errors.media}</p>
            </div>
          ) : null}
        </div>

        {/* Description */}
        <div className="py-3">
          <label
            htmlFor="description"
            className="block uppercase tracking-wide text-xs font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Write your thoughts here..."
            className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500">
              <p>{formik.errors.description}</p>
            </div>
          ) : null}
        </div>

        <div className="py-3">
          <label
            htmlFor="address"
            className="block uppercase tracking-wide text-xs font-bold mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="location.address"
            placeholder="Your Venue Address"
            className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location.address}
          />
          {formik.touched.location?.address &&
          formik.errors.location?.address ? (
            <div className="text-red-500">
              <p>{formik.errors.location.address}</p>
            </div>
          ) : null}
        </div>
        <div className="py-3">
          <label
            htmlFor="city"
            className="block uppercase tracking-wide text-xs font-bold mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="location.city"
            placeholder="City"
            className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location.city}
          />
          {formik.touched.location?.city && formik.errors.location?.city ? (
            <div className="text-red-500">
              <p>{formik.errors.location.city}</p>
            </div>
          ) : null}
        </div>

        <div className="py-3">
          <label
            htmlFor="zip"
            className="block uppercase tracking-wide text-xs font-bold mb-2"
          >
            Zip code
          </label>
          <input
            type="text"
            id="zip"
            name="location.zip"
            placeholder="Zip code"
            className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location.zip}
          />
          {formik.touched.location?.zip && formik.errors.location?.zip ? (
            <div className="text-red-500">
              <p> {formik.errors.location.zip}</p>
            </div>
          ) : null}
        </div>

        <div className="py-3">
          <label
            htmlFor="country"
            className="block uppercase tracking-wide text-xs font-bold mb-2"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="location.country"
            placeholder="Country"
            className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location.country}
          />
          {formik.touched.location?.country &&
          formik.errors.location?.country ? (
            <div className="text-red-500">
              <p>{formik.errors.location.country}</p>
            </div>
          ) : null}
        </div>

        <div className="py-3">
          <label
            htmlFor="continent"
            className="block uppercase tracking-wide text-xs font-bold mb-2"
          >
            Continent
          </label>
          <input
            type="text"
            id="continent"
            name="location.continent"
            placeholder="Continent"
            className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location.continent}
          />
          {formik.touched.location?.continent &&
          formik.errors.location?.continent ? (
            <div className="text-red-500">
              <p>{formik.errors.location.continent}</p>
            </div>
          ) : null}
        </div>

        <div className="py-3">
          <label
            htmlFor="maxGuest"
            className="block uppercase tracking-wide text-xs font-bold mb-2"
          >
            Max Guests
          </label>
          <input
            type="number"
            id="maxGuests"
            name="maxGuests"
            placeholder="Max Guests"
            min="1"
            className="px-3 py-2 bg-white border-b-2 border-slate-300 focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maxGuests}
          />
          {formik.touched.maxGuests && formik.errors.maxGuests ? (
            <div className="text-red-500">
              <p>{formik.errors.maxGuests}</p>
            </div>
          ) : null}
        </div>

        <div className="p-4">
          <h2 className="text-lg py-6 font-bold">
            Venue Service provided by Host
          </h2>
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

        <div className="flex justify-center items-center py-6">
          <button
            type="submit"
            className="text-blue bg-orange font-Montserrat font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;

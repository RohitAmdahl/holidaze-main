import React from 'react';

const LocationInputs = ({ formik }) => {
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid lg:grid-cols-3 lg:gap-3 lg:mt-2">
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
        {formik.touched.location?.address && formik.errors.location?.address ? (
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
        {formik.touched.location?.country && formik.errors.location?.country ? (
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
    </div>
  );
};

export default LocationInputs;

import React from 'react';

const TitlePriceInputs = ({ formik }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
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
      <div>
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
    </div>
  );
};

export default TitlePriceInputs;

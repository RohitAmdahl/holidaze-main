import React, { useContext } from 'react';
import { AiOutlineMail, AiOutlinePicture, AiOutlineUser } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpSchema } from '../../pages/signUp/schema';
import * as yup from 'yup';

import { AuthContext } from '../../auth/Context';

const initialValues = {
  name: '',
  email: '',
  password: '',
  avatar: '',
  venueManager: false,
};

const SignUpForm = () => {
  const { registerUser } = useContext(AuthContext);

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      const signUpData = {
        name: values.name,
        email: values.email,
        avatar: values.avatar,
        password: values.password,
        venueManager: values.venueManager,
      };

      registerUser(signUpData);

      action.resetForm();
    },
  });

  return (
    <div>
      <div className="max-w-lg container mt-7 mx-auto font-Montserrat border-2 p-8 ">
        <div className=" flex justify-center items-center">
          <h1 className="text-2xl font-semibold">Sign Up</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 text-green">
          <p className="font-medium"> ALREADY HAVE AN ACCOUNT? </p>
          <Link
            to="/signIn"
            className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold text-xl border-b-8 m-3 border-orange text-blue"
          >
            Sign In
          </Link>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col py-2 items-center gap-4 pb-4 ">
            <div className="w-full">
              <span className="pb-4">
                <AiOutlineUser size={30} className="p-1" />
              </span>
              <input
                type="name"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="User Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              <p className="text-red-500"> {errors.name} </p>
            </div>
            <div className="w-full">
              <span className="pb-4">
                <AiOutlineMail size={30} className="p-1" />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="test_123@stud.noroff.no"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              <p className="text-red-500">{errors.email}</p>
            </div>
            <div className="w-full">
              <span className="pb-4">
                <BsKey size={30} className="p-1" />
              </span>
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              <p className="text-red-500">{errors.password}</p>
            </div>
            <div className="w-full">
              <span className="pb-4">
                <AiOutlinePicture size={30} className="p-1" />
              </span>
              <input
                name="avatar"
                type="avatar"
                id="avatar"
                placeholder="Avatar /  Image url Link"
                value={values.avatar}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              <p className="text-red-500">{errors.avatar} </p>
            </div>
            <div className="w-full ">
              <p className="pb-4 font-medium">
                Do you want to rent out an accommodation?
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="checkbox ">Yes</label>
                <input
                  type="radio"
                  name="host"
                  id="yes"
                  className="leading-tight "
                  checked={values.venueManager}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <label htmlFor="radio ">No</label>
                <input
                  type="radio"
                  name="host"
                  id="no"
                  checked={values.venueManager}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="leading-tight "
                />
              </div>
            </div>
            <div>
              <button
                className="text-blue bg-orange font-Montserrat font-bold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

import React, { useContext } from 'react';
import { AuthContext } from '../../auth/context/Context';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { signInSchema } from '../../pages/signIn/schema';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
const initialValues = {
  email: '',
  password: '',
};
const LoginForm = () => {
  const navigate = useNavigate();
  const { logInUser } = useContext(AuthContext);

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signInSchema,
    onSubmit: (values, action) => {
      const logINdata = {
        email: values.email,
        password: values.password,
      };
      navigate('/profile');

      logInUser(logINdata);
      action.resetForm();
    },
  });

  return (
    <div className="max-w-lg container p-8 mt-10 mx-auto font-Montserrat border-2">
      <div className=" flex justify-center items-center  ">
        <h1 className="text-2xl font-semibold  ">Sign In</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 text-green">
        <p className=" font-medium ">DO NOT HAVE AN ACCOUNT? </p>
        <Link
          to="/signUp"
          className=" focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold text-xl border-b-8 m-3 border-orange text-blue"
        >
          Sign Up
        </Link>
      </div>
      <div>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col py-2 items-center gap-4 pb-4 ">
            <div className="w-full">
              <span className="pb-4">
                <AiOutlineMail size={30} className="p-1" />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter Your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              <p className="text-red-500"> {errors.email} </p>
            </div>
          </div>
          <div className="flex flex-col py-2 items-center gap-4 pb-4 ">
            <div className="w-full">
              <span className="pb-4">
                <BsKey size={30} className="p-1" />
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              <p className="text-red-500"> {errors.password} </p>
            </div>

            <div className="mt-4 mb-2">
              <button
                className="text-blue bg-orange font-Montserrat font-bold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

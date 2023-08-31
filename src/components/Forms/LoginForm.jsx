import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="max-w-lg container p-8 mt-7 mx-auto font-Montserrat  border-2 ">
      <div className=" flex justify-center items-center  ">
        <h1 className="text-2xl font-semibold pb-8 ">Sign In</h1>
      </div>
      <div className=" ">
        <form action="" className="flex flex-col">
          <div className="flex flex-col py-2 items-center gap-4 pb-4 ">
            <div className="w-full">
              <span className="pb-4">
                <AiOutlineMail size={30} className="p-1" />
              </span>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              {/* <p>hello this is email</p> */}
            </div>
          </div>
          <div className="flex flex-col py-2 items-center gap-4 pb-4 ">
            <div className="w-full">
              <span className="pb-4">
                <BsKey size={30} className="p-1" />
              </span>
              <input
                type="text"
                name="email"
                placeholder="Password"
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              {/* <p>hello this is password</p> */}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 text-green">
              <p className="">DO NOT HAVE AN ACCOUNT? </p>
              <Link
                to=""
                className="font-semibold text-xl border-b-8 m-3 border-orange text-blue"
              >
                Sign Up
              </Link>
            </div>
            <div>
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

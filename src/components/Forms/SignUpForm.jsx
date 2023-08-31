import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlinePicture } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const SignUpForm = () => {
  return (
    <div>
      <div className="max-w-lg container  mt-7 mx-auto font-Montserrat border-2 p-8  ">
        <div className=" flex justify-center items-center  ">
          <h1 className="text-2xl font-semibold  ">Sign Up</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 text-green">
          <p className=""> ALREADY HAVE AN ACCOUNT? </p>
          <Link
            to="/signIn"
            className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold text-xl border-b-8 m-3 border-orange text-blue"
          >
            Sign In
          </Link>
        </div>

        <form action="" className="flex flex-col">
          <div className="flex flex-col py-2 items-center gap-4 pb-4 ">
            <div className="w-full">
              <span className="pb-4">
                <AiOutlineUser size={30} className="p-1" />
              </span>
              <input
                type="text"
                name="name"
                placeholder="User name"
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              {/* <p>hello this is email</p> */}
            </div>
            <div className="w-full">
              <span className="pb-4">
                <AiOutlineMail size={30} className="p-1" />
              </span>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              {/* <p>hello this is password</p> */}
            </div>
            <div className="w-full">
              <span className="pb-4">
                <BsKey size={30} className="p-1" />
              </span>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              {/* <p>hello this is password</p> */}
            </div>
            <div className="w-full">
              <span className="pb-4">
                <AiOutlinePicture size={30} className="p-1" />
              </span>
              <input
                type="text"
                name="media"
                placeholder="Avatar /  Image url Link"
                className="px-3 py-2 bg-white border-b-2  border-slate-300  focus:outline-none focus:border-blue focus:ring-orange block w-full rounded-md sm:text-sm focus:ring-1"
              />
              {/* <p>hello this is password</p> */}
            </div>
            <div className="w-full ">
              <p className="pb-4">Do you want to rent out an accommodation?</p>
              <div className="flex items-center gap-2">
                <label htmlFor="checkbox ">Yes</label>
                <input type="radio" name="media" className="leading-tight " />
                <label htmlFor="radio ">No</label>
                <input type="radio" name="media" className="leading-tight " />
              </div>

              {/* <p>hello this is password</p> */}
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

import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { TbBeach } from "react-icons/tb";
import { PiSignIn } from "react-icons/pi";
import {
  HiMenuAlt1,
  HiOutlineX,
  HiHome,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <>
      <div className=" flex justify-between my-4 mx-3 items-center">
        <div className=" font-Montserrat flex justify-between items-baseline container mx-auto max-w-4xl">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
          <nav className="hidden md:block  ">
            <ul className=" flex justify-center ">
              <li className=" flex justify-center items-center px-4">
                <NavLink to="/" className="flex justify-center items-center">
                  <HiHome />
                  Home
                </NavLink>
              </li>
              <li className=" flex justify-center items-center px-4">
                <NavLink
                  to="/venues"
                  className="flex justify-center items-center"
                >
                  <TbBeach />
                  Venues
                </NavLink>
              </li>
              <li className=" flex justify-center items-center px-4">
                <NavLink
                  to="/signIn"
                  className="flex justify-center items-center"
                >
                  <PiSignIn />
                  Sign In
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* mobile nav */}
        <nav
          className={
            !toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0  "
          }
        >
          <ul className="font-Montserrat container mx-auto max-w-lg">
            <li
              onClick={handleToggle}
              className="flex items-center justify-center py-4 duration-100 ease-out hover:text-blue hover:underline "
            >
              <span className="mx-2">
                <HiHome />
              </span>{" "}
              Home
            </li>
            <li
              onClick={handleToggle}
              className="flex items-center justify-center py-4 duration-100 ease-out hover:text-blue hover:underline "
            >
              <span className="mx-2">
                <TbBeach />
              </span>
              Venues
            </li>
            <li
              onClick={handleToggle}
              className="flex items-center justify-center py-4 duration-100 ease-out hover:text-blue hover:underline "
            >
              <span className="mx-2">
                <PiSignIn />
              </span>
              Sign In
            </li>
          </ul>
        </nav>

        {/* Toggle button */}
        <button
          onClick={handleToggle}
          className="block rounded-xl bg-orange px-3 py-1  md:hidden"
        >
          {!toggle ? (
            <span className=" flex items-center text-blue justify-center text-lg">
              <HiMenuAlt1 size={20} /> Menu
            </span>
          ) : (
            <span className=" text-blue flex items-center justify-center text-lg">
              <HiOutlineX size={25} /> Close
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;

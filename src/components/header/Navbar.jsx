import React, { useState, useContext } from 'react';
import Logo from '../../assets/logo.png';
import { TbBeach } from 'react-icons/tb';
import { PiSignIn } from 'react-icons/pi';
import { BiUserPlus } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import {
  HiMenuAlt1,
  HiOutlineX,
  HiHome,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/Context';
const Navbar = () => {
  const { state, logoutHandel } = useContext(AuthContext);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <>
      <div className=" flex justify-between my-4 p-4 items-center max-w-4xl font-Montserrat container mx-auto border-b-2 border-orange  ">
        <div className=" font-Montserrat flex justify-between items-baseline container mx-auto max-w-4xl ">
          <NavLink to="/">
            <img className="max-w-img w-full" src={Logo} alt="logo" />
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
              {!state.isAuthenticated ? (
                <>
                  <li className="flex justify-center items-center px-4">
                    <NavLink
                      to="/signIn"
                      className="flex justify-center items-center"
                    >
                      <PiSignIn />
                      Sign In
                    </NavLink>
                  </li>
                  <li className="flex justify-center items-center px-4">
                    <NavLink
                      to="/signUP"
                      className="flex justify-center items-center"
                    >
                      <BiUserPlus />
                      Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                // If the user is authenticated, show Logout and Profile buttons
                <>
                  <li className="flex justify-center items-center px-4">
                    <NavLink
                      to="/profile"
                      className="flex justify-center items-center"
                    >
                      <CgProfile />
                      Profile
                    </NavLink>
                  </li>
                  <button
                    onClick={logoutHandel}
                    className=" font-bold text-blue border-b-8  border-orange text-md flex justify-center items-center px-4  ring-orange focus:ring-1 shadow-lg"
                  >
                    LogOut
                  </button>
                </>
              )}
            </ul>
          </nav>
        </div>
        {/* mobile nav */}
        <nav
          className={
            !toggle ? 'mobile-nav left-[-100%]' : 'mobile-nav left-0  '
          }
        >
          <ul className="font-Montserrat container mx-auto max-w-lg">
            <li
              onClick={handleToggle}
              className="flex items-center justify-center py-4 duration-100 ease-out hover:text-blue hover:underline "
            >
              <NavLink to="/" className="mx-2 flex items-center">
                <HiHome />
                Home
              </NavLink>
            </li>
            <li
              onClick={handleToggle}
              className="flex items-center justify-center py-4 duration-100 ease-out hover:text-blue hover:underline "
            >
              <NavLink to="/venues" className="mx-2 flex items-center">
                <TbBeach />
                Venues
              </NavLink>
            </li>
            {!state.isAuthenticated ? (
              <>
                {' '}
                <li
                  onClick={handleToggle}
                  className="flex items-center justify-center py-4 duration-100 ease-out hover:text-blue hover:underline "
                >
                  <NavLink to="/signIn" className="mx-2 flex items-center">
                    <PiSignIn />
                    Sign In
                  </NavLink>
                </li>
                <li
                  onClick={handleToggle}
                  className="flex items-center justify-center py-4 duration-100 ease-out hover:text-blue hover:underline "
                >
                  <NavLink to="/signUp" className="mx-2 flex items-center">
                    <BiUserPlus />
                    Sign Up
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {' '}
                <li className="flex items-center justify-center py-4 duration-100 ease-out hover:text-blue hover:underline ">
                  <NavLink
                    to="/profile"
                    className="flex justify-center items-center"
                  >
                    <CgProfile />
                    Profile
                  </NavLink>
                </li>
                <li className="flex items-center justify-center py-4 duration-100 ease-out hover:text-blue hover:underline ">
                  <button
                    className="  mt-4 font-bold text-blue border-b-8  border-orange text-md flex justify-center items-center px-4  ring-orange focus:ring-1 shadow-lg"
                    onClick={logoutHandel}
                  >
                    LogOut
                  </button>{' '}
                </li>
              </>
            )}
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

import React from 'react';
import logo from '../../assets/logo.png';
import footerLogo from '../../assets/footer_logo.png';
import { BsFacebook } from 'react-icons/bs';
import { ImInstagram } from 'react-icons/im';
const Footer = () => {
  return (
    <footer className=" container mx-auto max-w-4xl items-center mt-4 pt-8 ">
      <div className="flex flex-col  items-center pb-4 lg:flex lg:max-w-4xl lg:justify-between lg:container lg:mx-auto  ">
        <div className=" w-full justify-between lg:flex lg:justify-between lg:items-center lg:align-baseline max-w-xl ">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto lg:ml-0 max-w-img w-full"
          />
          <div className="mx-auto flex justify-center items-center m-3 md:max-w-lg ">
            <span className="p-2  lg:pb-0">
              <BsFacebook size={20} className=" text-sky-700 " />
            </span>
            <span className="p-2 lg:pb-0">
              <ImInstagram size={20} className="text-red-700" />
            </span>
          </div>
          <p className="p-2 flex flex-col items-center md:max-w-lg mx-auto lg:pb-0  ">
            <span className="p-2 lg:pb-0">
              © Holidaze {new Date().getFullYear()},
            </span>
            Designed and coding by ;-
            <span className="text-blue font-serif">Rohit K Amdahl</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

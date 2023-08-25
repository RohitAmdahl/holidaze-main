import React from "react";
import logo from "../../assets/logo.png";
import footerLogo from "../../assets/footer_logo.png";
import { BsFacebook } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
const Footer = () => {
  return (
    <footer className=" flex justify-between items-center container mx-auto max-w-4xl">
      <div className="">
        <img src={logo} alt="Logo" className="w-1/2" />
      </div>
      <ul className="flex justify-center items-center">
        <li className="px-2">
          <BsFacebook size={20} className=" text-sky-700" />
        </li>
        <li className="px-2">
          <ImInstagram size={20} className="text-red-700" />
        </li>
      </ul>
      <div className="flex flex-col  ">
        <span className="">© Holidaze {new Date().getFullYear()},</span>
        <span className="">
          Designed and coding by
          <img
            src={footerLogo}
            alt="footer logo designer and coder "
            className=""
          />
        </span>
      </div>
    </footer>
  );
};

export default Footer;

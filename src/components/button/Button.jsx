import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className=" container max-w-4xl mx-auto ">
      <div className="flex justify-center items-center mt-2 mb-2">
        <Link
          to="/venues"
          type="button"
          className="  text-blue bg-orange font-Montserrat font-bold   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Explore
          <BsArrowRight size={25} className="px-1" />
        </Link>
      </div>
    </div>
  );
};

export default Button;

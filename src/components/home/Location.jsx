import React from "react";
import picOne from "../../assets/photo_1.jpg";
import picTwo from "../../assets/photo_2.jpg";
import picThree from "../../assets/photo_3.jpg";
import picFour from "../../assets/photo_4.jpg";
import picFive from "../../assets/photo_5.jpg";
import { TfiLocationPin } from "react-icons/tfi";

const Location = () => {
  return (
    <div className=" container mx-auto max-w-4xl p-3 font-Montserrat  ">
      <h1 className="text-2xl py-2 font-semibold ">Popular locations </h1>
      <div className=" flex justify-center gap-2 flex-wrap md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-2 ">
        <div className=" md:row-span-2 lg:row-span-4 md:gap-1 md:mx-auto ">
          <span className=" absolute bg-gray-300 rounded-full font-bold text-blue px-3 m-2 flex justify-center items-center">
            <TfiLocationPin />
            India
          </span>
          <img src={picOne} alt="" className="w-full max-w-md" />
        </div>
        <div className=" relative md:mx-auto ">
          <span className=" absolute font-bold bg-gray-300 rounded-full text-blue px-3 m-2 flex justify-center items-center">
            <TfiLocationPin /> Greece
          </span>
          <img src={picTwo} alt="" className="w-full max-w-md" />
        </div>
        <div className=" relative md:mx-auto ">
          <span className=" absolute rounded-full font-bold bg-gray-300 text-blue px-3 m-2 flex justify-center items-center">
            <TfiLocationPin /> Norway
          </span>
          <img src={picThree} alt="" className="w-full max-w-md" />
        </div>
        <div className="relative md:mx-auto">
          <span className=" absolute rounded-full font-bold bg-gray-300 text-blue px-3 m-2 flex justify-center items-center">
            <TfiLocationPin /> Spain
          </span>
          <img src={picFour} alt="" className="w-full max-w-md" />
        </div>
        <div className=" relative md:mx-auto ">
          <span className=" absolute rounded-full font-bold bg-gray-300 text-blue px-3 m-2 flex justify-center items-center">
            <TfiLocationPin /> Croatia
          </span>
          <img src={picFive} alt="" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default Location;

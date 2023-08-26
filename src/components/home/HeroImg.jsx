import React from "react";
import HeroPic from "../../assets/hero.jpg";
const HeroImg = () => {
  return (
    <div className=" container mx-auto max-w-4xl p-3 ">
      <img
        src={HeroPic}
        alt="image of the colorful house with the text dream for all the seasons"
      />
    </div>
  );
};

export default HeroImg;

import React from "react";

const Card = ({ place }) => {
  const { id, name, rating, media, title, maxGuests, location } = place;
  console.log(place);
  return (
    <>
      <div className="text-1xl"> {name} </div>
      <div>
        <img src={media} alt="" />
      </div>
    </>
  );
};

export default Card;

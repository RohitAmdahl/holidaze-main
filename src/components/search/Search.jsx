import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const VenueSearch = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handelSearch = (e) => {
    onSearch(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="max-w-md rounded overflow-hidden mx-auto p-1 font-pins text-fontcolor  ">
      <form className="w-full max-w-md pb-3 pt-3">
        <div className="flex items-center border-b-2 border-orange py-2 m-2">
          <BsSearch />
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="text"
            value={search}
            onChange={handelSearch}
            placeholder="Search......"
          />
        </div>
      </form>
    </div>
  );
};

export default VenueSearch;

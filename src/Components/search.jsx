import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = ({ setSearch, fetchData, showTable }) => {
  return (
    <div className={`max-w-lg mx-auto mt-10 transition-transform duration-500`}>
      <h1
        className={`text-3xl text-gray-400 font-serif font-bold mb-4 text-center ${
          showTable ? "hidden" : ""
        }`}
      >
        Recipe Finder
      </h1>
      <div className="bg-white h-14 flex flex-row justify-between items-center rounded-2xl">
        <input
          placeholder="Search Ingredient"
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-2xl h-12 mx-2 border-white border-0 outline-none w-[85%]"
        />
        <button className="bg-white w-10 rounded-2xl" onClick={fetchData}>
          <BiSearchAlt size={32} />
        </button>
      </div>
    </div>
  );
};

export default Search;

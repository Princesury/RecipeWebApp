import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const List = ({ data }) => {
  return (
    <div className="w-[80%] h-[80%] m-7 mx-auto rounded-lg bg-opacity-40 bg-white backdrop-blur-sm grid lg:grid-cols-3 md:grid-cols-2 gap-8 overflow-y-scroll">
      {data.meals.map((items) => (
        <Link to={`/detail/${items.idMeal}`} key={items.idMeal}>
          <div className="my-10 bg-gray-300 mx-auto justify-center items-center rounded-md w-60">
            <img
              className="h-44 w-60 cursor-pointer rounded-md"
              src={items.strMealThumb}
              alt={items.strMeal}
            />
            <h1 className="text-lg text-gray-700 font-bold leading-2 text-center p-2">
              {items.strMeal}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;

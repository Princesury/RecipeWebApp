import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const json = await res.json();
      setData(json.meals[0]);
      console.log(json.meals[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the renamed function
  }, [id]);

  return (
    <div className="bg-recipe bg-cover w-screen h-screen">
      {data ? (
        <div className="flex flex-col items-center justify-center backdrop-blur-md h-full">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col mt-5 gap-5 ">
              <h1 className="text-gray-400 text-2xl w-60 font-serif ">
                {data.strMeal}
              </h1>
              <img
                src={data.strMealThumb}
                alt={data.strMealThumb}
                className="aspect-1 w-[40%] rounded-lg"
              />
            </div>
            <div className="mr-20">
              <h1 className="text-2xl text-gray-400 mb-5">Ingredients:</h1>
              <p className="text-xl text-gray-400">
                {data.strMeasure1} {data.strIngredient1}
              </p>
              <p className="text-xl text-gray-400">
                {data.strMeasure2} {data.strIngredient2}
              </p>
              <p className="text-xl text-gray-400">
                {data.strMeasure3} {data.strIngredient3}
              </p>
              <p className="text-xl text-gray-400">
                {data.strMeasure4} {data.strIngredient4}
              </p>
              <p className="text-xl text-gray-400">
                {data.strMeasure5} {data.strIngredient5}
              </p>
              <p className="text-xl text-gray-400">
                {data.strMeasure6} {data.strIngredient6}
              </p>
              <p className="text-xl text-gray-400">
                {data.strMeasure7} {data.strIngredient7}
              </p>
              <p className="text-xl text-gray-400">
                {data.strMeasure8} {data.strIngredient8}
              </p>
              <p className="text-xl text-gray-400">
                {data.strMeasure9} {data.strIngredient9}
              </p>
            </div>
          </div>
          <div className="text-gray-300 leading-6 w-[90%] mt-7 overflow-y-scroll my-5">
            <h1 className="text-2xl">Instruction:</h1>
            <p className="text-md">{data.strInstructions}</p>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen bg-transparent flex justify-center items-center ">
          <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-[#4B4894]"></div>
        </div>
      )}
    </div>
  );
};

export default Detail;

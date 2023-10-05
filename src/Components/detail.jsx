import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

const Detail = () => {
  const [ data , setData] = useState(null);
  const { id } = useParams(); // Get the id parameter from the URL
const fetch = async() => {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const json = await res.json();
    setData(json);
    console.log(json); // Log the fetched data here
  } catch (error) {
    console.error(error);
  }
} 

useEffect(() => {
   fetch();
},[id])


  return (
    <div className='bg-recipe bg-cover w-screen h-screen fixed'>
      <h1 className='text-white'>Detail Page for ID: {id}</h1>
    </div>
  );
};

export default Detail;

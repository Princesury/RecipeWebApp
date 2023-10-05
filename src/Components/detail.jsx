import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

const Detail = () => {
  const { id } = useParams(); // Get the id parameter from the URL

  return (
    <div>
      <h1>Detail Page for ID: {id}</h1> {/* Use the id parameter */}
      {/* Content of the detail page */}
    </div>
  );
};

export default Detail;

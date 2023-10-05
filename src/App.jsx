import React, { useState, useEffect } from 'react';
import Search from './Components/search';
import List from './Components/list';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState(null); // Add a state for error

  const fetchData = async () => {
    try {
      if (search.length > 0) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`);
        const json = await response.json();

        if (json && json.meals) {
          setData(json);
          setShowTable(true);
          setError(null); // Clear any previous errors
          console.log(json);
        } else {
          // Handle the case where data is not in the expected format
          setError('Invalid ingredient'); // Set the error message
          setShowTable(false);
        }
      } else {
        alert("Enter a search query");
        setShowTable(false);
      }
    } catch (e) {
      console.error(e);
      setError('An error occurred'); // Set the error message
      setShowTable(false);
    }
  };

  return (
    <div className="bg-recipe bg-cover w-screen h-screen fixed">
      <Search setSearch={setSearch} fetchData={fetchData} showTable={showTable} />

      {error ? (
        // Display the error message
        <h1 className="text-2xl text-red-600 mt-4">{error}</h1>
      ) : showTable && data && data.meals ? (
        <List data={data} />
      ) : (
        // You can display a message or component here when data is not available
        null
      )}
    </div>
  );
};

export default App;

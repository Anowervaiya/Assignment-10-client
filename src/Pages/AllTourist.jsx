import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleTour from '../Components/SingleTour';

function AllToristSpot() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get('http://localhost:3000/alltour')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


    const handleSortBycost = event => {
      const selectedSortBy = event.target.value;

      let sortedData = [];
      if (selectedSortBy === 'cost') {
        sortedData = [...data].sort((a, b) => a.average_cost - b.average_cost);
      } else {
        sortedData = [...data];
      }

      setData(sortedData);
    };
  return (
    <>
      <div className="text-2xl font-bold text-center p-4 bg-gray-200 container mx-auto my-8 rounded-lg">
        Listed Books
      </div>

      <div className="text-center container mx-auto">
        <select
          onChange={handleSortBycost}
          name="cars"
          style={{ color: 'white', backgroundColor: 'green' }}
          className="p-2 rounded-lg font-bold *:bg-gray-400 *:text-black outline-light-green-500   cursor-pointer"
        >
          <option value="Sort by" className="text-center">
            Sort By
          </option>
          <option value="cost">average cost</option>
        </select>
      </div>
      <div className="lg:my-32 my-16 container mx-auto">
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl poppins-semibold">
            All Torist Spots
          </h1>

          <p
            className="text-gray-500 text-xl  lg:w-3/5 w-9/12 mx-auto
        text-center mt-4 mb-16"
          >
            Get ready for adventure with our Tour packages! Explore thrilling
            outdoor activities for an unforgettable experience.
          </p>
        </div>
        <div className="px-4 md:px-8 lg:px-16 grid grid-cols-2 gap-4 md:gap-6 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 ">
          {data && data.map(item => <SingleTour item={item}></SingleTour>)}
        </div>
      </div>
    </>
  );
}

export default AllToristSpot;

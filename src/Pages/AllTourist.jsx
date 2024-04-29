import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
       All Tourist Spot
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
        <div className="px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10  lg:grid-cols-3 ">
          {
            data.map(item => {
              return (
                <div className="  rounded-2xl  hover:shadow-[-5px_10px_30px_rgba(0,0,0,0.1),5px_-10px_30px_rgba(0,0,0,0.1)]  transition ease-linear duration-200 delay-75   hover:-translate-y-1 shadow-[0_2px_5px_gray]">
                  <img
                    className="w-full h-[200px] rounded-2xl border-b-2"
                    src={item.photo}
                  />
                  <div className="p-3 ">
                    <h2 className="font-semibold text-center ">
                      Spot Name : {item.name}
                    </h2>
                    <hr className="my-2" />
                    <h2 className=" text-center ">
                      Average Cost : {item.average_cost}
                    </h2>
                    <hr className="my-2" />
                    <h2 className=" text-center ">
                      Total Visitors : {item.TotalVisitors}
                    </h2>
                    <hr className="my-2" />
                    <h2 className="text-center ">
                      {' '}
                      Travel Time : {item.travel_time}
                    </h2>
                    <hr className="my-2" />
                    <h2 className=" text-center ">
                      Seasonality : {item.seasonality}
                    </h2>
                    <hr className="my-2" />
                    <p className="bg-gradient-to-r from-blue-500  to-cyan-300 text-transparent bg-clip-text  text-center text-sm lg:text-md font-bold my-2">
                      <Link to={`/details/${item._id}`}> View Details</Link>
                    </p>
                  </div>
                </div>
              );
            })
         }
          
        </div>
      </div>
    </>
  );
}

export default AllToristSpot;

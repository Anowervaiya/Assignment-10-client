import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleTour from './SingleTour'
import { Link } from 'react-router-dom'

function Countries() {
  const [country,setCountry]= useState(null)
  useEffect(() => {
    axios
      .get('http://localhost:3000/country')
      .then(res => setCountry(res.data));
 },[])
  
  console.log(country);
  if (!country) return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
  
  return (
    <div className="lg:my-32 my-16 container mx-auto">
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl poppins-semibold">All Countries</h1>

        <p
          className="text-gray-500 text-xl  lg:w-3/5 w-9/12 mx-auto
        text-center mt-4 mb-16"
        >
          Get ready for adventure with our Tour packages! Explore thrilling
          outdoor activities for an unforgettable experience.
        </p>
      </div>
      <div className="px-4 md:px-8 lg:px-16 grid grid-cols-2 gap-4 md:gap-6 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 ">
        {country.map(item => {
          return (
            <Link to={`/country/${item.country_Name}`}>
              <div className="  rounded-2xl  hover:shadow-[-5px_10px_30px_rgba(0,0,0,0.1),5px_-10px_30px_rgba(0,0,0,0.1)]  transition ease-linear duration-200 delay-75   hover:-translate-y-1 shadow-[0_2px_5px_gray]">
                <img
                  className="w-full h-[150px] rounded-2xl border-b-2"
                  src={item.photo}
                />
                <div className="p-3 ">
                  <h2 className="font-semibold text-center ">
                    {item.country_Name}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Countries
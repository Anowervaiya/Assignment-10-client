import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function SpecificCountry() {
  const data = useLoaderData()

 
  return (
    <div className='grid gap-8 p-8 md:px-2 container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      
      {data.map(item => {
        return (
          <div className="  rounded-2xl  hover:shadow-[-5px_10px_30px_rgba(0,0,0,0.1),5px_-10px_30px_rgba(0,0,0,0.1)]  transition ease-linear duration-200 delay-75   hover:-translate-y-1 shadow-[0_2px_5px_gray]">
            <img
              className="w-full h-[150px] rounded-2xl border-b-2"
              src={item.photo}
            />
            <div className="p-3 ">
              <h2 className="font-semibold text-center ">
                Country Name : 
                {item.country_Name}
              </h2>
              <h2 className="text-center ">Location : {item.location}</h2>
              <h2 className="text-center ">Description : {item.description}</h2>
              <h2 className="text-center ">
                Average Cost : {item.average_cost}
              </h2>
              <h2 className="text-center ">Seasonality : {item.seasonality}</h2>
              <p className="bg-gradient-to-r from-blue-500  to-cyan-300 text-transparent bg-clip-text  text-center text-sm lg:text-md font-bold my-2">
                <Link to={`/details/${item._id}`}> View Details</Link>
              </p>
            </div>
          </div>
        );
      })}
    
    </div>
  );
}

export default SpecificCountry
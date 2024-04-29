import React from 'react'

import { Link } from 'react-router-dom';
function SingleTour({item}) {

  const { photo, name, _id } = item;
  return (
    <>
      <div className="  rounded-2xl  hover:shadow-[-5px_10px_30px_rgba(0,0,0,0.1),5px_-10px_30px_rgba(0,0,0,0.1)]  transition ease-linear duration-200 delay-75   hover:-translate-y-1 shadow-[0_2px_5px_gray]">
        <img className="w-full h-[150px] rounded-2xl border-b-2" src={photo} />
        <div className="p-3 ">
          <h2 className="font-semibold text-center ">{name}</h2>
          <p className="bg-gradient-to-r from-blue-500  to-cyan-300 text-transparent bg-clip-text  text-center text-sm lg:text-md font-bold my-2">
            <Link  to={`/details/${_id}`}> View Details</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SingleTour
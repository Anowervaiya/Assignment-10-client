import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import SingleTour from '../Components/SingleTour';
import { ContextAPI } from '../AuthContext/ContextProvider';

function MyTourSpot() {
  const [data, setData] = useState([]);
  const { user,loader } = useContext(ContextAPI)
  const Email = user?.email;
 



 

  useEffect(() => {
    axios
      .get(`http://localhost:3000/mytour/${Email}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


 
  return (
    <div className="lg:my-32 my-16 container mx-auto">
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl poppins-semibold">
          My Torist Spots
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
  );
}

export default MyTourSpot;

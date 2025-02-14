import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ContextAPI } from '../AuthContext/ContextProvider';
import { Link } from 'react-router-dom';
import SingleMyTour from '../Components/SingleMyTour';
import Swal from 'sweetalert2';

function MyTourSpot() {
  const [data, setData] = useState([]);
  const { user, loader } = useContext(ContextAPI);
  const Email = user?.email;

  useEffect(() => {
    axios
      .get(`https://tourism-a-10-server.vercel.app/mytour/${Email}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deleteTour = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`https://tourism-a-10-server.vercel.app/tour/${id}`)
          .then(res => {
            const remaining = data.filter(item => item._id !== id);

            setData(remaining);
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          });
      }
    });
  };

  if (!data)
    return (
      <div className="flex justify-center items-center min-h-screen font-bold text-3xl container mx-auto">
        <div>
          You have no tour plan ... please add a tour plan{' '}
          <Link className="underline text-green-500" to={'/addTourist'}>
            {' '}
            Add a tour{' '}
          </Link>
        </div>{' '}
      </div>
    );

  return (
    <div className="lg:my-32 my-16 container mx-auto">
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl poppins-semibold">
          My Tourist Spots
        </h1>

        <p
          className="text-gray-500 text-xl  lg:w-3/5 w-9/12 mx-auto
        text-center mt-4 mb-16"
        >
          Get ready for adventure with our Tour packages! Explore thrilling
          outdoor activities for an unforgettable experience.
        </p>
      </div>
      <div>
        {data &&
          data.map((item, index) => (
            <SingleMyTour
              item={item}
              deleteTour={deleteTour}
              key={index}
            ></SingleMyTour>
          ))}
      </div>
    </div>
  );
}

export default MyTourSpot;

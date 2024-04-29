import { useForm } from 'react-hook-form';

import { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { ContextAPI } from '../AuthContext/ContextProvider';
import { SiTrueup } from 'react-icons/si';

const SimpleRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const { createUser, user, updatedProfile } = useContext(ContextAPI);

  const [passwordError, setPasswordError] = useState(null); // State to manage password error
  const [eye, setEye] = useState(false);
  const handleForm = data => {
    const email = data.email;
    const password = data.password;
    const Name = data.name;
    const photo = data.photoURL;
    console.log(data, photo, Name);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.'
      );
      return;
    }

    createUser(email, password)
      .then(userCredential => {
       
        updatedProfile(Name, photo)
          .then(res => {
            toast.success('user Created Successfully');
            navigate('/');
          } )
          .catch(err => console.log('photo ase nai'));

        


        
        
      })
      .catch(error => {
        console.log('user was created once ');
        toast.warning('You have already an account');
      });
  };

  // if (user) return <Navigate to={'/'}></Navigate>;

  return (
    <div className="container mx-auto p-4 min-h-[100vh] flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(handleForm)}>
        <label> Name:</label>
        <input
          type="text"
          {...register('name', {required:true})}
          className="border my-4 p-3 rounded-lg w-full "
        />
        <label> Photo URL :</label>
        <input
          type="url"
          {...register('photoURL', { required: true })}
          className="border p-3 my-4 rounded-lg w-full "
        />
        {/* Last Name :
        <input
          type="text"
          {...register('lastName', { required: true })}
          className="border p-3 rounded-lg w-full "
        />
        {errors.lastName && (
          <p className="text-red-500 font-bold">Last name is required.</p>
        )} */}
        <label htmlFor="">Email:</label>
        <input
          type="email"
          {...register('email')}
          className="border p-3 my-4 rounded-lg w-full "
        />
        <label htmlFor="">Password:</label>
        <div className="relative my-4">
          <input
            type={eye ? 'text' : 'password'}
            {...register('password', { required: true })}
            className="border p-3  rounded-lg w-full "
          />
          <div
            onClick={() => {
              setEye(!eye);
            }}
            className="absolute top-4 right-5"
          >
            <FaEye />
          </div>
        </div>
        {passwordError && (
          <p className="text-red-500 font-bold">{passwordError}</p>
        )}
        <input
          type="submit"
          value={'Sign Up'}
          className=" w-full mb-4 cursor-pointer btn mt-8 bg-green-500 text-white"
        />
      </form>
      <div>
        already have an account? please{' '}
        <Link to={'/logIn'} className=" font-bold">
          Sign In{' '}
        </Link>
      </div>
    </div>
  );
};

export default SimpleRegistrationForm;

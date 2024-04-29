import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

import { FaEye } from 'react-icons/fa';
import { ContextAPI } from '../AuthContext/ContextProvider';
import { toast } from 'react-toastify';

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { SingInUser, GitHubLogin, GoogleLogin } = useContext(ContextAPI);

  const location = useLocation();
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);

  // const [eye, setEye] = useState(false);

  const google = () => {
    GoogleLogin()
      .then(result => {
        navigate(location.state ? location.state : '/');
      })
      .catch(error => {
        console.log('google mama tho ase na');
      });
  };

  const Github = () => {
    GitHubLogin()
      .then(result => {
        navigate(location.state ? location.state : '/');
      })
      .catch(error => {
        console.log('github mama tho ase na');
      });
  };

  const handleForm = data => {
    const email = data.email;
    const password = data.password;

    // create user
    SingInUser(email, password)
      .then(result => {
        console.log(result);

        navigate(location.state ? location.state : '/');
      })
      .catch(error => {
        console.log('sing in hocce na');
        toast.warning('your password or email is not valid');
      });

    // google login
  };

  // if (user) return <Navigate to={'/'}></Navigate>;
  return (
    <div className="flex min-h-screen container mx-auto p-4 flex-col justify-center items-center">
      <form onSubmit={handleSubmit(handleForm)}>
        <label> Email:</label>
        <input
          type="email"
          {...register('email')}
          className="border p-3 my-5 rounded-lg w-full "
        />
        <label>Password:</label>
        <div className="relative mt-4 ">
          <input
            type={eye ? 'text' : 'password'}
            {...register('password', { required: true })}
            className="border p-3 rounded-lg w-full "
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
        <input
          type="submit"
          value={'Sign In'}
          className=" w-full  cursor-pointer btn my-8 bg-green-500 text-white"
        />
      </form>
      <div>
        have not any account? please{' '}
        <Link className="font-bold" to={'/signUp'}>
          Sign Up
        </Link>
      </div>
      <div className="mt-8 ">
        <button className="btn " onClick={() => google()}>
          Google
        </button>
        <button className="mx-8 btn " onClick={Github}>
          {' '}
          GitHub{' '}
        </button>
      </div>
    </div>
  );
}

export default SignIn;

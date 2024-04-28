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

  const { createUser, SingInUser, GitHubLogin, user, GoogleLogin } =
    useContext(ContextAPI);

  const location = useLocation();
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);

  // const [eye, setEye] = useState(false);

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
        toast.warning('your password or email is not valid')
      });

    // google login
  };

  // if (user) return <Navigate to={'/'}></Navigate>;
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        Email:
        <input
          type="email"
          {...register('email')}
          className="border p-3 rounded-lg w-full "
        />
        Password:
        <div className="relative">
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
          className="  cursor-pointer btn mt-8 bg-green-500 text-white"
        />
      </form>
      have not any account? please{' '}
      <Link className="font-bold" to={'/signUp'}>
        Sign Up
      </Link>
      <div className="mt-8 ">
        <button className="btn " onClick={() => GoogleLogin()}>
          Google
        </button>
        <button className="mx-8 btn " onClick={GitHubLogin}>
          {' '}
          GitHub{' '}
        </button>
      </div>
    </div>
  );
}

export default SignIn;

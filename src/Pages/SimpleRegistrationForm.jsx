import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { ContextAPI } from '../AuthContext/ContextProvider';



export function SimpleRegistrationForm() {
  const {createUser,user}=useContext(ContextAPI)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate()
  // State to manage password error
  //  const [eye, setEye] = useState(false);
   const handleForm = data => {
     const email = data.mail;
     const password = data.password;
     const Name = data.name;
     const photo = data.photoURL;

     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
     if (!passwordRegex.test(password)) {
       setPasswordError(
         'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.'
       );
    
       return;
     }
     createUser(email,password)
       .then(res => {
         alert('user created successfully')
         navigate('/')
         
       })
       .catch(err => {
       alert('oops!!!' ,err)
     })

     

   };


    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            onSubmit={handleSubmit(handleForm)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                {...register('Name')}
                placeholder="Enter Your Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Photo
              </Typography>
              <Input
                size="lg"
                type="url"
                placeholder="https//:la@a&goado&l.jpg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                {...register('mail', { required: 'Email Address is required' })}
                size="lg"
                placeholder="Enter Your Email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />

              {errors.mail && (
                <p className="text-red-500" role="alert">
                  {errors.mail?.message}
                </p>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                {...register('password', {
                  required: 'password is required',
                })}
                type="password"
                size="lg"
                placeholder="Enter Your Password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
              {passwordError && (
                <p className="text-red-500 font-bold">{passwordError}</p>
              )}
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: '-ml-2.5' }}
            />
            <Button type="submit" className="mt-6" fullWidth>
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{' '}
              <Link to={'/logIn'} className="font-medium text-gray-900">
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    );
}

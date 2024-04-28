import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import router from './Routs/Routs.js';
import Root from './Layout/Root';
import Home from './Pages/Home';

import Error from './Pages/Error';
import ContextProvider from './AuthContext/ContextProvider';
import SimpleRegistrationForm from './Pages/SimpleRegistrationForm';


  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import SignIn from './Pages/LogIn';
import AddTourist_Spot from './Pages/AddTour';
import Details from './Components/Details';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/signUp',
        element: <SimpleRegistrationForm></SimpleRegistrationForm>,
      },
      {
        path: '/logIn',
        element: <SignIn></SignIn>,
      },
      {
        path: '/addTourist',
        element: <AddTourist_Spot></AddTourist_Spot>,
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:3000/tour/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer/>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
  
  </React.StrictMode>
);

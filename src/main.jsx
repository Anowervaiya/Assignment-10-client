import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
import AllToristSpot from './Pages/AllTourist';
import MyTourSpot from './Pages/Mytour';
import PrivateRout from './Components/PrivateRout';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Update from './Components/Update';
import SpecificCountry from './Components/SpecificCountry';

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
        element: (
          <PrivateRout>
            <AddTourist_Spot></AddTourist_Spot>
          </PrivateRout>
        ),
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRout>
            <Details></Details>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`https://tourism-a-10-server.vercel.app/tour/${params.id}`),
      },
      {
        path: '/alltour',
        element: <AllToristSpot></AllToristSpot>,
      },
      {
        path: '/mytour',
        element: (
          <PrivateRout>
            <MyTourSpot></MyTourSpot>
          </PrivateRout>
        ),
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>,
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/updateTour/:id',
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://tourism-a-10-server.vercel.app/tour/${params.id}`),
      },
      {
        path: '/country/:name',
        element: <SpecificCountry></SpecificCountry>,
        loader: ({ params }) =>
          fetch(
            `https://tourism-a-10-server.vercel.app/country/${params.name}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);

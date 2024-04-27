import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import router from './Routs/Routs.js';
import Root from './Layout/Root';
import Home from './Pages/Home';

import { LogIn } from './Pages/LogIn';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import { SimpleRegistrationForm } from './Pages/SimpleRegistrationForm';
import Error from './Pages/Error';
import ContextProvider from './AuthContext/ContextProvider';


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
        element: <LogIn></LogIn>,
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import router from './Routs/Routs.js';
import Root from './Layout/Root';
import Home from './Pages/Home';
import { SimpleRegistrationForm } from './Pages/SimpleRegistrationForm';
import { LogIn } from './Pages/LogIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

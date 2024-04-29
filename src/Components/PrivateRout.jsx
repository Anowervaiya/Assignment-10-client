import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { ContextAPI } from '../AuthContext/ContextProvider';

function PrivateRout({ children }) {
  const { user, loader } = useContext(ContextAPI);

  const location = useLocation();
  

  // if (loader) {
  //   return <span className="loading loading-bars loading-lg"></span>;
  // }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/logIn'}></Navigate>;
}

export default PrivateRout;

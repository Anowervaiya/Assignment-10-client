import React, { useContext } from 'react';
import { contextApi } from '../../ContextComponent/Context';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRout({ children }) {
  const { user, loader } = useContext(contextApi);

  const location = useLocation();
  console.log(location);

  if (loader) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/signIn'}></Navigate>;
}

export default PrivateRout;

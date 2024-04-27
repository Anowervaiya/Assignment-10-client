import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/SDKs';
export const ContextAPI = createContext(null);

function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const aadsf = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
    });
    return () => {
      aadsf();
    };
  }, []);

  const objInfo = {
    createUser,
    LogInUser,
    user
  };

  return <ContextAPI.Provider value={objInfo}>{children}</ContextAPI.Provider>;
}

export default ContextProvider;

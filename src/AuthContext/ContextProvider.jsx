import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

import { signOut } from 'firebase/auth';

import auth from '../firebase/SDKs';

export const ContextAPI = createContext(null);

function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);

  const [loader, setLoader] = useState(true);

  const [email,setEmail]=useState(null)

  // useEffect(() => {
  //   fetch('/data.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data);
  //     });
  // }, []);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SingInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInOut = () => {
    return signOut(auth);
  };

  const updatedProfile = (name, photo) => {
    console.log(name, photo);
    return updateProfile(
      auth.currentUser,

      {
        displayName: name,
        photoURL: photo,
      }
    );
  };

  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, user => {
      setUser(user);
      setLoader(false);
    });

    return () => {
      unsubscrive();
    };
  }, []);

  const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('google mama tho ase na');
      });

    signInWithPopup(auth, provider);
  };

  const GitHubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider);
  };

 
 
  

  const ContextData = {
    data,
    user,
    createUser,
    GoogleLogin,
    signInOut,
    SingInUser,
    updatedProfile,
    GitHubLogin,
    loader,
    
  };

  return (
    <ContextAPI.Provider value={ContextData}>{children}</ContextAPI.Provider>
  );
}

export default ContextProvider;

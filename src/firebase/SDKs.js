// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDvGwLWQqFhJSROKhcm9VHF_OxOmzP6w0E',
  authDomain: 'tourism-a-10.firebaseapp.com',
  projectId: 'tourism-a-10',
  storageBucket: 'tourism-a-10.appspot.com',
  messagingSenderId: '323322930030',
  appId: '1:323322930030:web:e3cc119ce92af27556977f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
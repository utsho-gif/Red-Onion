import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBVQnQ8f_EGLuIwE1Gnk-k2rGKrSqcjJr4",
  authDomain: "red-onion-11e8f.firebaseapp.com",
  projectId: "red-onion-11e8f",
  storageBucket: "red-onion-11e8f.appspot.com",
  messagingSenderId: "657143353290",
  appId: "1:657143353290:web:02f79e0f83f6d50ec70933"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
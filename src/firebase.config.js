// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1E_GCyWW_35vIOHtRxesc6HGwdOKajnc",
  authDomain: "react-dragon-news-c38db.firebaseapp.com",
  projectId: "react-dragon-news-c38db",
  storageBucket: "react-dragon-news-c38db.appspot.com",
  messagingSenderId: "339678057360",
  appId: "1:339678057360:web:5d687771e7cfe9b5ed9915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG5AF58twA1MDWwc2tJMoQPf3jmOK7tmM",
  authDomain: "first-48764.firebaseapp.com",
  projectId: "first-48764",
  storageBucket: "first-48764.appspot.com",
  messagingSenderId: "939368552852",
  appId: "1:939368552852:web:0a7404a1384a04c1311781"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =  getAuth(app)
export default auth;
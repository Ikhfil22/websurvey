// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxJi37ajQEXmJxjgI-EBmeiq0tAEo5qRc",
  authDomain: "survey-6778e.firebaseapp.com",
  projectId: "survey-6778e",
  storageBucket: "survey-6778e.appspot.com",
  messagingSenderId: "5692488963",
  appId: "1:5692488963:web:f2197f6f47e7f7b7557d36",
  measurementId: "G-WG773DZH2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

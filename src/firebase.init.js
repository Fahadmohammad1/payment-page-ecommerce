// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp1H4Tyq_yT2FX1rxteEOd_MPmrVnU_x0",
  authDomain: "payment-e-commerce.firebaseapp.com",
  projectId: "payment-e-commerce",
  storageBucket: "payment-e-commerce.appspot.com",
  messagingSenderId: "405883683199",
  appId: "1:405883683199:web:53485df0bfc9cdce2dda4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-a4bO-DgicPMKck2lGLkuSYCjKEpaLj0",
  authDomain: "mern-book-inventory-208f8.firebaseapp.com",
  projectId: "mern-book-inventory-208f8",
  storageBucket: "mern-book-inventory-208f8.appspot.com",
  messagingSenderId: "744678998893",
  appId: "1:744678998893:web:c8a5a05702c7bc82211064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdIGbiPwQ7qO5Iw31bJYUKEce6dLIU8Lw",
  authDomain: "diploma-zumbi-dos-palmares.firebaseapp.com",
  databaseURL: "https://diploma-zumbi-dos-palmares-default-rtdb.firebaseio.com",
  projectId: "diploma-zumbi-dos-palmares",
  storageBucket: "diploma-zumbi-dos-palmares.appspot.com",
  messagingSenderId: "508897193922",
  appId: "1:508897193922:web:de935165cc1392c172305b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
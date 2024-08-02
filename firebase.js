// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8eAufYixFu9bx7LF_eel2uCyxwTDq4F8",
  authDomain: "inventory-management-f1426.firebaseapp.com",
  projectId: "inventory-management-f1426",
  storageBucket: "inventory-management-f1426.appspot.com",
  messagingSenderId: "628310676907",
  appId: "1:628310676907:web:fd36c6b2887a4d09902eee",
  measurementId: "G-209363KP9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore} 
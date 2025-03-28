// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9CLjUANnJ973pqGP9Ib6R8WsEwUCWQOo",
  authDomain: "eco-house-1e846.firebaseapp.com",
  projectId: "eco-house-1e846",
  storageBucket: "eco-house-1e846.firebasestorage.app",
  messagingSenderId: "675361956103",
  appId: "1:675361956103:web:7c0078cb650874f9dae5a2",
  measurementId: "G-T2FZND91TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
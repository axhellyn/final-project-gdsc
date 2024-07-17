import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMSCMEAoWjnZYE1Q5DXLwFcwdD_ZowgeM",
  authDomain: "donut-shop-4b9b0.firebaseapp.com",
  projectId: "donut-shop-4b9b0",
  storageBucket: "donut-shop-4b9b0.appspot.com",
  messagingSenderId: "987428736363",
  appId: "1:987428736363:web:fb77c086060f9cb93fd02e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
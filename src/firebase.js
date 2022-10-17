// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf491JPrAezraSmHXQDbLxFB2sfE9Y5rE",
  authDomain: "utickets-5446b.firebaseapp.com",
  projectId: "utickets-5446b",
  storageBucket: "utickets-5446b.appspot.com",
  messagingSenderId: "603500116602",
  appId: "1:603500116602:web:c4e00d1aacc70761f359c3",
  measurementId: "G-YRVPZ8VSE9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4bu8ZTJNALzCrphxXjluzltIFjAL1vTg",
  authDomain: "mynetflix-gpt-ai.firebaseapp.com",
  projectId: "mynetflix-gpt-ai",
  storageBucket: "mynetflix-gpt-ai.appspot.com",
  messagingSenderId: "991130842003",
  appId: "1:991130842003:web:7fbd0ecb317779a3e86e66",
  measurementId: "G-L2MCBK2PDR"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
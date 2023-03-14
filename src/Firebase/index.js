// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2ZV6sYZKYzOVI1SsWU58PK-kiymvdOsM",
  authDomain: "meisi-coder.firebaseapp.com",
  projectId: "meisi-coder",
  storageBucket: "meisi-coder.appspot.com",
  messagingSenderId: "26570256293",
  appId: "1:26570256293:web:dde79316fbeb0b25f4424c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
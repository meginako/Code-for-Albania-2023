/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3PtNHkS_suFBI_4zykJDx9KbzKDxfMpI",
  authDomain: "final-cfa-y3.firebaseapp.com",
  projectId: "final-cfa-y3",
  storageBucket: "final-cfa-y3.appspot.com",
  messagingSenderId: "151055377676",
  appId: "1:151055377676:web:bc7acc38617ab985e01529"
};


// Initialize Firebase
const fapp = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export default db;
export default fapp;

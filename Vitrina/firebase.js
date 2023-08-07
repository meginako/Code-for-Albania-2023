import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1nnXCL4bYqrJmE06RzrO2e5qLffbz4V4",
  authDomain: "cfa-y3-project.firebaseapp.com",
  databaseURL: "https://cfa-y3-project-default-rtdb.firebaseio.com",
  projectId: "cfa-y3-project",
  storageBucket: "cfa-y3-project.appspot.com",
  messagingSenderId: "51319744402",
  appId: "1:51319744402:web:b9628b217800f1e596c34b",
  measurementId: "G-3X9XPXQW7P"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

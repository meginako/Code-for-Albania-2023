import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDHvcjuh5I8JPg_gUFT4UP-X-ErpLB8yXg",
  authDomain: "erik-1b8c0.firebaseapp.com",
  projectId: "erik-1b8c0",
  storageBucket: "erik-1b8c0.appspot.com",
  messagingSenderId: "870601103369",
  appId: "1:870601103369:web:7b1c55b0f045842a0740d8",
  measurementId: "G-8DXVZJKZR7"

};

function initFirebase(){
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
}

const firebaseApp = initFirebase();
export const db = firebase.firestore();
export const auth = firebase.auth();
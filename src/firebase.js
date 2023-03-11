
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZxbJlDDDepsHBfu1CawzpAWFtFKoJeDo",
  authDomain: "challenge-7ffc6.firebaseapp.com",
  projectId: "challenge-7ffc6",
  storageBucket: "challenge-7ffc6.appspot.com",
  messagingSenderId: "12095213179",
  appId: "1:12095213179:web:1c4fd74891727e2dabdcde"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth =firebase.auth();

export  {db,auth};

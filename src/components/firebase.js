import firebase from "firebase/app";
import "firebase/firestore"; // If using Firebase database
import "firebase/storage"; // If using Firebase storage
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = {
  apiKey: "AIzaSyCvGBCUR3bPha-Jwtnx89UAkWoWVT4ZZjY",
  authDomain: "jack-bygraves.firebaseapp.com",
  projectId: "jack-bygraves",
  storageBucket: "jack-bygraves.appspot.com",
  messagingSenderId: "98333038464",
  appId: "1:98333038464:web:b70d778515ce5155d35365",
  measurementId: "G-EXKWLJNES9",
};
firebase.initializeApp(firebaseApp);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

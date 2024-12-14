import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD3VqmKI6fqKS6e3pWqxfIQKgB7rBYpVY0",
    authDomain: "tinder-afad3.firebaseapp.com",
    projectId: "tinder-afad3",
    storageBucket: "tinder-afad3.firebasestorage.app",
    messagingSenderId: "337199592478",
    appId: "1:337199592478:web:aa3b8390d87d37a18a2a0f",
    measurementId: "G-CX1R5P61X3"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider(firebaseApp);
export const db = getFirestore(firebaseApp);
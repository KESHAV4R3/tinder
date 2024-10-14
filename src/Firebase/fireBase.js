import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDt04qWUUYkRbKszzYdSlG3LMkD_RuA7HE",
    authDomain: "tinder-clone-e9351.firebaseapp.com",
    projectId: "tinder-clone-e9351",
    storageBucket: "tinder-clone-e9351.appspot.com",
    messagingSenderId: "1070011012058",
    appId: "1:1070011012058:web:86901dcb4131f8e01766e3",
    measurementId: "G-7LPVVHRLDM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider(firebaseApp);
export const db = getFirestore(firebaseApp);
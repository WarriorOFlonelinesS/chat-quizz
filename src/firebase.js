import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import "@firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
// ###########################
// YOUR CONFIGURATION 
// ###########################
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

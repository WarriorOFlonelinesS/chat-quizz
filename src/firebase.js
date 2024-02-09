// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import "@firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAWQryCi26Y--Ep7P_KKi2xUXGGnAMZJ8",
  authDomain: "chat-quiz-app-b7d98.firebaseapp.com",
  projectId: "chat-quiz-app-b7d98",
  storageBucket: "chat-quiz-app-b7d98.appspot.com",
  messagingSenderId: "584339501969",
  appId: "1:584339501969:web:4ed0639eda9999a6cb6030",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = getAuth(app);

export const rsf = new ReduxSagaFirebase(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAWQryCi26Y--Ep7P_KKi2xUXGGnAMZJ8",
    authDomain: "chat-quiz-app-b7d98.firebaseapp.com",
    projectId: "chat-quiz-app-b7d98",
    storageBucket: "chat-quiz-app-b7d98.appspot.com",
    messagingSenderId: "584339501969",
    appId: "1:584339501969:web:4ed0639eda9999a6cb6030"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
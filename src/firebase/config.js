// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtbH9W6eckhj40smw8Du1OPr_Tz9X6T8Y",
  authDomain: "motley-f059f.firebaseapp.com",
  projectId: "motley-f059f",
  storageBucket: "motley-f059f.appspot.com",
  messagingSenderId: "254150129300",
  appId: "1:254150129300:web:79bc41aed1acfe4c30a681"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCojfYWwqjeWiwH14dBcNhSTOk-gD8s51A",
  authDomain: "react-crud-213f8.firebaseapp.com",
  projectId: "react-crud-213f8",
  storageBucket: "react-crud-213f8.appspot.com",
  messagingSenderId: "303881911099",
  appId: "1:303881911099:web:e3a48aed1a7ded051c551e",
  measurementId: "G-F0EK91R5GR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
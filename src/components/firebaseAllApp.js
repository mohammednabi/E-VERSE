// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg3UK-oWozfxirpBnRrWgjEFCDULVp4zM",
  authDomain: "e-verse-b2fdd.firebaseapp.com",
  projectId: "e-verse-b2fdd",
  storageBucket: "e-verse-b2fdd.appspot.com",
  messagingSenderId: "823980282532",
  appId: "1:823980282532:web:0eaabcee88d2a789e40c31",
  measurementId: "G-MG6EHBMQ74",
};

// Initialize Firebase

initializeApp(firebaseConfig);

const db = getFirestore();

export const imagesRef = collection(db, "images");
export const articlesRef = collection(db, "articles");

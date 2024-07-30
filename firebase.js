// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvCreTjnwqpUSo_PaZrrcGXe14j5b7kbE",
  authDomain: "notesapp-334c5.firebaseapp.com",
  projectId: "notesapp-334c5",
  storageBucket: "notesapp-334c5.appspot.com",
  messagingSenderId: "742951961133",
  appId: "1:742951961133:web:4cfdf0c669ebf81672aea4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection (db, "notes")
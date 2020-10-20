import firebase from "firebase";
import dotenv from "dotenv";
dotenv.config();
const result = dotenv.config();
console.log(result);

// Initialize Febase
firebase.initializeApp({
  apiKey: "AIzaSyCHJAjJFgJmm-yR4pQ5XfhG5tmZ5WbUKQU",
  authDomain: "livestock-4ef72.firebaseapp.com",
  databaseURL: "https://livestock-4ef72.firebaseio.com",
  projectId: "livestock-4ef72",
  storageBucket: "livestock-4ef72.appspot.com",
  messagingSenderId: "1007009537264",
  appId: "1:1007009537264:web:59abf678758f06aeccf635",
  measurementId: "G-5QMRYTK5FB",
});

export const ref = firebase.database().ref();
export const auth = firebase.auth();
export const storage = firebase.storage();

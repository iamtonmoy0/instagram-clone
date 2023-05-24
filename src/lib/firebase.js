import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';

//importing seed file


const config={
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const firebase = initializeApp(config);
const  FieldValue  =getFirestore();


export { firebase, FieldValue };
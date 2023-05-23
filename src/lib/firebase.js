import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';


const config={
  apiKey: "AIzaSyCezgCjGmggZbRgIJ41m7wZBeX86Iq_YK8",
  authDomain: "insta-clone-e8a1b.firebaseapp.com",
  projectId: "insta-clone-e8a1b",
  storageBucket: "insta-clone-e8a1b.appspot.com",
  messagingSenderId: "12960432365",
  appId: "1:12960432365:web:412c8da0d8827ca2f78ce4"
};

const app = initializeApp(config);
const  FieldValue  =getFirestore();


export { app, FieldValue };
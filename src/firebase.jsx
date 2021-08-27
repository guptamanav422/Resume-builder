import { initializeApp } from "firebase/app";
import { getFirestore ,collection} from "firebase/firestore"
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBKZyZtugIQ2aFLfPQ8iXIrcTf01Jh6IlM",
    authDomain: "resume-7258e.firebaseapp.com",
    projectId: "resume-7258e",
    storageBucket: "resume-7258e.appspot.com",
    messagingSenderId: "303477769216",
    appId: "1:303477769216:web:4edb55f964169b9cfb84e5"
  };
  const firebaseApp=initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const firestore = getFirestore();
  export {createUserWithEmailAndPassword, collection,signInWithEmailAndPassword}
  export const db = getFirestore(firebaseApp);


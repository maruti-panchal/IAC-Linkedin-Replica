import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD-DQv6rTpChlH9bvPwuu1Sg1icnVsH5lQ",
  authDomain: "linkedin-clone-3e0de.firebaseapp.com",
  projectId: "linkedin-clone-3e0de",
  storageBucket: "linkedin-clone-3e0de.appspot.com",
  messagingSenderId: "225175659702",
  appId: "1:225175659702:web:b29fd5e702777730a73217",
  measurementId: "G-30NJP6HBW3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)
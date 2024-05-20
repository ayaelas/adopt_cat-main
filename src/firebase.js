import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXTXip96Iv-WX1OJmQZS_mXfY-aJU3U8w",
  authDomain: "adoptify-a1d7b.firebaseapp.com",
  projectId: "adoptify-a1d7b",
  storageBucket: "adoptify-a1d7b.appspot.com",
  messagingSenderId: "879290473",
  appId: "1:879290473:web:99a33cd373f871810c5af8"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

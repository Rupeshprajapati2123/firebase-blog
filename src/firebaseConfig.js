import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDI7JGu4HND6Wj_1VyX9LuT5tCHZ7uH2IY",
    authDomain: "stc-iitr.firebaseapp.com",
    projectId: "stc-iitr",
    storageBucket: "stc-iitr.appspot.com",
    messagingSenderId: "886694999174",
    appId: "1:886694999174:web:13b27d1a3cdf322a198d07",
    measurementId: "G-8HCXT2ZR8D"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiZgmFDZIgtkEsUmVuVtFu7KL9myzyFMU",
  authDomain: "rj-impvip.firebaseapp.com",
  projectId: "rj-impvip",
  storageBucket: "rj-impvip.appspot.com",
  messagingSenderId: "914551344282",
  appId: "1:914551344282:web:c17f0ab227f5c3546b2323"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
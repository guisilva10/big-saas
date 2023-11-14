// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAluugF8Elvpdg1g0VMX9Qr1lt-Xnk9690",
  authDomain: "saas-c2cb7.firebaseapp.com",
  projectId: "saas-c2cb7",
  storageBucket: "saas-c2cb7.appspot.com",
  messagingSenderId: "722219606808",
  appId: "1:722219606808:web:e700934e196d94e385346d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);


export {
    db,
    auth,
    storage,
    collection
}
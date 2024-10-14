import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-b2309.firebaseapp.com",
  projectId: "chat-app-b2309",
  storageBucket: "chat-app-b2309.appspot.com",
  messagingSenderId: "640235278716",
  appId: "1:640235278716:web:e610004517fa74d60214f9",
  measurementId: "G-S6JGD97X7C"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

const analytics = getAnalytics(app);
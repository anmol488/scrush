import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQa6UHewTdnnPm4bz4bZx42esoqY0T5kg",
  authDomain: "scrush-3205a.firebaseapp.com",
  projectId: "scrush-3205a",
  storageBucket: "scrush-3205a.appspot.com",
  messagingSenderId: "1058049563956",
  appId: "1:1058049563956:web:bbe075ef9754e0edec5961",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export { app, auth, db };

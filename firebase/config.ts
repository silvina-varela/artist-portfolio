import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;

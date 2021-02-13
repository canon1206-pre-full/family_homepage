import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API,
  authDomain: process.env.AUTH,
  projectId: process.env.PROJECT,
  storageBucket: process.env.STORAGE,
  messagingSenderId: process.env.MESSAGE,
  appId: process.env.APP,
  measurementId: process.env.MEASURE 
};

export default firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
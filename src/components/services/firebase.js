import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import dotenv from "dotenv";

dotenv.config();

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = (googleLogin) => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => googleLogin(res.user))
    .catch((err) => console.log(err.message));
};
export const logOut = (googleLogOut) => {
  auth
    .signOut()
    .then(() => googleLogOut())
    .catch((err) => console.log(err.message));
};

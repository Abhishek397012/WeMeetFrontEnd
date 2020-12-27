import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDd5iwGRCyP1RzIqmS10u9fYUOZ3i9XYl4",
  authDomain: "wemeet-69849.firebaseapp.com",
  projectId: "wemeet-69849",
  storageBucket: "wemeet-69849.appspot.com",
  messagingSenderId: "384434381677",
  appId: "1:384434381677:web:a1c491e9e68e4e88f03064",
  measurementId: "G-PP8M2FW8MK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(fbProvider);

export default firebase;

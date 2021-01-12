import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { login, authenticate } from "../components/Hardik/LogIn/apiLogin";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "wemeet-69849.firebaseapp.com",
  projectId: "wemeet-69849",
  storageBucket: "wemeet-69849.appspot.com",
  messagingSenderId: "384434381677",
  appId: "1:384434381677:web:a1c491e9e68e4e88f03064",
  measurementId: "G-PP8M2FW8MK",
};

const createUserProfile = (user) => {
  const name = user.displayName;
  const fid = user.uid;
  const profilePicUrl = user.photoURL;
  const email = user.email;

  login({
    name,
    fid,
    profilePicUrl,
    designation: "",
    organization: "",
    city: "",
    aboutMe: "",
    eventsHosted: [],
    country: "",
    email,
  })
    .then((data) => {
      console.log("logged in", data);
      authenticate(data);
      window.history.go(0);
    })
    .catch((err) => {
      console.log(err);
    });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((data) => {
    createUserProfile(data.user);
  });
};

const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => {
  auth.signInWithPopup(fbProvider).then((data) => {
    createUserProfile(data.user);
  });
};

export default firebase;







import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD_lCEp6UmBKmLh3Vi57lo3BdGI1lMhtI",
  authDomain: "insta-clone-b2d2b.firebaseapp.com",
  projectId: "insta-clone-b2d2b",
  storageBucket: "insta-clone-b2d2b.appspot.com",
  messagingSenderId: "817978741454",
  appId: "1:817978741454:web:8b5e2bebd07dae43e8b69f"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
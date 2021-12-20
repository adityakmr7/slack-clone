// Import the functions you need from the SDKs you need

import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "slack-clone-f5558.firebaseapp.com",
  projectId: "slack-clone-f5558",
  storageBucket: "slack-clone-f5558.appspot.com",
  messagingSenderId: "845295325881",
  appId: "1:845295325881:web:da5ea2505be83a3d150168"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
// export { auth };
export default db;

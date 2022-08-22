import  firebase  from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCevl4GhttX55oC5MC4NSG4kpQOWt5HfEw",
  authDomain: "journal-app-d5a16.firebaseapp.com",
  projectId: "journal-app-d5a16",
  storageBucket: "journal-app-d5a16.appspot.com",
  messagingSenderId: "189050883008",
  appId: "1:189050883008:web:4ac93a3542d63bbc315625"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
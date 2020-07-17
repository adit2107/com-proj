import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7nHTQ-1F0y-JEjHOypunPnXn3y5K9BZU",
    authDomain: "crowncomproj.firebaseapp.com",
    databaseURL: "https://crowncomproj.firebaseio.com",
    projectId: "crowncomproj",
    storageBucket: "crowncomproj.appspot.com",
    messagingSenderId: "367379821689",
    appId: "1:367379821689:web:fc66f50c354e131988d0a8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCuDkSFU9_puBSbDAVkI_f8zlvIEgPCrY4",
  authDomain: "hbakery-79db5.firebaseapp.com",
  databaseURL: "https://hbakery-79db5.firebaseio.com",
  projectId: "hbakery-79db5",
  storageBucket: "hbakery-79db5.appspot.com",
  messagingSenderId: "994380590011",
  appId: "1:994380590011:web:bc9fe4ba06a2625051729e",
  measurementId: "G-272Q996JW5"
};


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const docSnapshot = await userRef.get();

    if(!docSnapshot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('unable to create user', error);
      }

    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { Await } from 'react-router-dom';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwNEsGBQUN0xedvaMNpk4g1mUjEkARjNI",
  authDomain: "jip-nettbutikk.firebaseapp.com",
  projectId: "jip-nettbutikk",
  storageBucket: "jip-nettbutikk.firebasestorage.app",
  messagingSenderId: "989890478059",
  appId: "1:989890478059:web:b2da234bbfd91662efa3ae"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  
  const userSnapShot = await getDoc(userDocRef);
  

  // if user data does not exists
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
    
  }
  return userDocRef;
};
 // if user data exists
  // return userDocRef
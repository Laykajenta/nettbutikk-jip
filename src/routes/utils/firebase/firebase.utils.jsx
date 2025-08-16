import { initializeApp } from 'firebase/app';
import { getAuth,  signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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
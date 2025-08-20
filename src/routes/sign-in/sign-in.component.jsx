import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import SignUpForm from "../../components/authentication/authentication.component";


  
const Authentication = () => {
   
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> Sign in side</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop Up</button>
      <SignUpForm />
    </div>
  );
};
export default Authentication;

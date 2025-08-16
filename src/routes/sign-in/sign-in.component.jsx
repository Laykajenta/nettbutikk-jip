import { signIn } from "../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  };

  return (
    <div>
      <h1> Sign in side</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop Up</button>
    </div>
  );
};
export default SignIn;

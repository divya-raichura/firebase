import { auth, googleProvider } from "../firebase-config/firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";

function Auth() {
  const signInWithGoogle = () => {
    try {
      signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    try {
      auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("Auth component mounted");
    console.log(auth?.currentUser?.email);
  });

  return (
    <>
      <h1>Auth</h1>
      <h2>{auth?.currentUser?.email}</h2>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={logout}>Log Out</button>
    </>
  );
}
export default Auth;

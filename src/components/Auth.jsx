import { auth, googleProvider } from "../firebase-config/firebase.js";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    try {
      createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
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

  console.log("outside", auth?.currentUser?.email);

  useEffect(() => {
    console.log("Auth component mounted");
    console.log("inside", auth?.currentUser?.email);
  });

  return (
    <>
      <h1>Auth</h1>
      <h2>{auth?.currentUser?.email}</h2>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={logout}>Log Out</button>
      <hr />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={createUser}>Create User</button>
    </>
  );
}
export default Auth;

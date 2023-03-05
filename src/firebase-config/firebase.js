// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj8sUBTpgkjhxYmpGExMkzm9wOEaWM038",
  authDomain: "fir-tutorial-81d0a.firebaseapp.com",
  projectId: "fir-tutorial-81d0a",
  storageBucket: "fir-tutorial-81d0a.appspot.com",
  messagingSenderId: "611149437900",
  appId: "1:611149437900:web:1e1a2ada4d9647af271b69",
  measurementId: "G-LRHQCWFG7M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

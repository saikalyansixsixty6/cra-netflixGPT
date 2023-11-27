// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnMgAEtj_NXMrFUsJKU1u9FbkI7NQ5_zY",
  authDomain: "netflixgpt-cra.firebaseapp.com",
  projectId: "netflixgpt-cra",
  storageBucket: "netflixgpt-cra.appspot.com",
  messagingSenderId: "690978557705",
  appId: "1:690978557705:web:8e004a1ba1033e0c87cdd8",
  measurementId: "G-7PJY96VVZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
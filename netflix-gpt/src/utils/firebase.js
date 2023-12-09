// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn1oJjZOx4ogOLAcW_02y4WDZmeS6qy04",
  authDomain: "cra-netflix1.firebaseapp.com",
  projectId: "cra-netflix1",
  storageBucket: "cra-netflix1.appspot.com",
  messagingSenderId: "641185886910",
  appId: "1:641185886910:web:7808907c67ee637042a4ef",
  measurementId: "G-F2L742VVTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
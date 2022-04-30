// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk9mJXW_6zWovI6QKP9Fb-BaHWMJPVpLA",
  authDomain: "warriors-arsenal.firebaseapp.com",
  projectId: "warriors-arsenal",
  storageBucket: "warriors-arsenal.appspot.com",
  messagingSenderId: "842108166398",
  appId: "1:842108166398:web:43aa7c66de56097a42c5af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

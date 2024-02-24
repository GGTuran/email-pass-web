// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-iqn_ZRydtezGUfY80OBR95XEEL4FXz8",
  authDomain: "email-pass-web.firebaseapp.com",
  projectId: "email-pass-web",
  storageBucket: "email-pass-web.appspot.com",
  messagingSenderId: "1077030103709",
  appId: "1:1077030103709:web:d637e1e1c03d7876454274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
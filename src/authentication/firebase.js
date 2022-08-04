// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfTD-JAJk6dwqeHq5dcm2R5tHNrJDTCdc",
  authDomain: "pair28-dts-mini-project.firebaseapp.com",
  projectId: "pair28-dts-mini-project",
  storageBucket: "pair28-dts-mini-project.appspot.com",
  messagingSenderId: "325546898095",
  appId: "1:325546898095:web:088b2db7704c2e3d3c9a5a",
  measurementId: "G-L0CVN7PM35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// kita akan buat fungsi2 nya
const registerDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangDidapatkan = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(
      "user yang teregis dan berhasil login adalah,",
      userYangDidapatkan.user
    );
  } catch (err) {
    console.log(err);
  }
};

const loginDenganEmailDanPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User yang berhasil login adalah,", userCredential.user);
  } catch (err) {
    console.log(err);
  }
};

const resetPasswordKarenaLupa = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err);
  }
};
const keluarDariApps = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  resetPasswordKarenaLupa,
  keluarDariApps,
  analytics,
};

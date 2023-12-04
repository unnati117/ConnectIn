// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjuFoeS6zP1kLddkQpAUQ35JiA__uVjkI",
  authDomain: "linkedin-clone-4961f.firebaseapp.com",
  projectId: "linkedin-clone-4961f",
  storageBucket: "linkedin-clone-4961f.appspot.com",
  messagingSenderId: "391429869309",
  appId: "1:391429869309:web:846f04caf3e7e5629f3894",
  measurementId: "G-0PP56FD6PX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

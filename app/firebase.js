// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuVfbD6r7kVOK4H-GfS3GX7w61msERR3M",
  authDomain: "uci-storage.firebaseapp.com",
  projectId: "uci-storage",
  storageBucket: "uci-storage.appspot.com",
  messagingSenderId: "229559033873",
  appId: "1:229559033873:web:2018e681881752cb9a11b0",
  measurementId: "G-L7VRZG8TKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

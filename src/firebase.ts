import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDloFJQka2o7nP756Fugvz0iXxXsr8dDXk",
  authDomain: "pst4r8-web.firebaseapp.com",
  projectId: "pst4r8-web",
  storageBucket: "pst4r8-web.appspot.com",
  messagingSenderId: "214423393603",
  appId: "1:214423393603:web:9e8b1b6920e9d5cfda0bf6",
  measurementId: "G-SLHZK7FXPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };

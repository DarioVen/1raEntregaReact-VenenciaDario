import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcbVGLxywqnl8Qj1wpbETxNsmePobR8fg",
  authDomain: "curso-react-aea9e.firebaseapp.com",
  projectId: "curso-react-aea9e",
  storageBucket: "curso-react-aea9e.firebasestorage.app",
  messagingSenderId: "822180269986",
  appId: "1:822180269986:web:cf6c9272b5ac3622e76cfb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
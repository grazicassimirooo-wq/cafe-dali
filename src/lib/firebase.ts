import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNQk8DJv7mlspVcGO7v8xDE_N9qagX7k0",
  authDomain: "cafe-dali-7550d.firebaseapp.com",
  projectId: "cafe-dali-7550d",
  storageBucket: "cafe-dali-7550d.firebasestorage.app",
  messagingSenderId: "649850479170",
  appId: "1:649850479170:web:a2a0372de142a39c57c3db",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

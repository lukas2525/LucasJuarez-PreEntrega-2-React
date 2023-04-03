
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC6U7-ruNvtEzwKbZX6v8zNpsxDRpq_FBo",
  authDomain: "primer-proyecto-react-38a61.firebaseapp.com",
  projectId: "primer-proyecto-react-38a61",
  storageBucket: "primer-proyecto-react-38a61.appspot.com",
  messagingSenderId: "834384135322",
  appId: "1:834384135322:web:5ba5c46333bf15eb12cb23"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

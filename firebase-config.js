import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAa_6sHsPEK_SiHS1MyOB1IyxloD6dew8",
  authDomain: "exam-prep-point.firebaseapp.com",
  projectId: "exam-prep-point",
  storageBucket: "exam-prep-point.firebasestorage.app",
  messagingSenderId: "1064333490631",
  appId: "1:1064333490631:web:230c698d4589cd8ec641e2",
  measurementId: "G-2662VDL9M1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

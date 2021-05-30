// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJ70zHOFQMFwQPMNtso-JhHzX7CzCmP4A",
  authDomain: "whatsapp-clone-113a9.firebaseapp.com",
  projectId: "whatsapp-clone-113a9",
  storageBucket: "whatsapp-clone-113a9.appspot.com",
  messagingSenderId: "978612125687",
  appId: "1:978612125687:web:bae96d88305da3583d78f2",
  measurementId: "G-F5KCQYH63B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

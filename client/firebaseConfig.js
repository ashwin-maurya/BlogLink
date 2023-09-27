// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyD1uwPEhHs0Hab7PwjCRUN72OMmiu0BJBo",
    authDomain: "bluesky-e016b.firebaseapp.com",
    projectId: "bluesky-e016b",
    storageBucket: "bluesky-e016b.appspot.com",
    messagingSenderId: "951003633445",
    appId: "1:951003633445:web:f60ea58a7a95dc63982ccc",
    measurementId: "G-8KL6M1VBGN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };

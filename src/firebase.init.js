// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJSls5mEWx93zQ22Z3YhHdbK2-k6yFG5Q",
    authDomain: "genius-car-services-189aa.firebaseapp.com",
    projectId: "genius-car-services-189aa",
    storageBucket: "genius-car-services-189aa.appspot.com",
    messagingSenderId: "354507779445",
    appId: "1:354507779445:web:a08b37489caa14ff77373c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

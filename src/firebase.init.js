// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7bx7m0wSCG7P-OCXLcyiKCk4a-VCjUuI",
    authDomain: "tutor-academy-1b167.firebaseapp.com",
    projectId: "tutor-academy-1b167",
    storageBucket: "tutor-academy-1b167.appspot.com",
    messagingSenderId: "1022678773804",
    appId: "1:1022678773804:web:d9ee8136cec3291a4fa189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
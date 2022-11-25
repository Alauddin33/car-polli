// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMIVf2qHbux3x0Mv6YjYO05ZB9Up5kyrI",
    authDomain: "car-polli.firebaseapp.com",
    projectId: "car-polli",
    storageBucket: "car-polli.appspot.com",
    messagingSenderId: "1039482939192",
    appId: "1:1039482939192:web:1ec2a1cb3a823d0ae743cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
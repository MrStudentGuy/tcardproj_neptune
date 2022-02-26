// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID 
// };

const firebaseConfig = {
    apiKey: "AIzaSyCaAOIObBvR4ZidtYmr4ccmJvnbAeIHamY",
    authDomain: "neptune-29d31.firebaseapp.com",
    projectId: "neptune-29d31",
    storageBucket: "neptune-29d31.appspot.com",
    messagingSenderId: "239829980161",
    appId: "1:239829980161:web:397eb51687b53649071c00"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();


export const auth = getAuth();




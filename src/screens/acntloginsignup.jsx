import React, { useCallback} from 'react';
import './loginsignup.css';
import { gProvider, db } from '../firebase';
import { signInWithPopup, getAuth, setPersistence, browserLocalPersistence} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore"; 

const LoginSignupScreen = () => {

    const GoogleLogin = () => {
        setPersistence(getAuth(), browserLocalPersistence)
        signInWithPopup(getAuth(), gProvider)
        .then((re) => {
            RedirifLogin();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const navigate = useNavigate();
    const handleRedir = useCallback(() => navigate('/home', {replace: true}), [navigate]);

    const RedirifLogin = async () => {

        await setDoc(doc(db, "User", getAuth().currentUser.uid), {
            uid: getAuth().currentUser.uid,
            email: getAuth().currentUser.email,
            photoURL: getAuth().currentUser.photoURL,
            displayName: getAuth().currentUser.displayName,
        });
        
        if (getAuth().currentUser) {
            console.log(getAuth().currentUser.displayName)
            handleRedir();
        }
    }

    return(
        <div className="login-signup-screen">
            <h1>Login</h1>

            <div className="logincontainer">
                <button onClick={ GoogleLogin } class="Login">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor" class = "svglogo">
                        <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z"></path>
                    </svg>

                    <span>Sign in with Google</span>
                </button>

                <p1 class="imp">IMPORTANT: Make sure popups are enabled on your browser for login to work.</p1>
            </div>
        
        </div>
    )
}

export default LoginSignupScreen;

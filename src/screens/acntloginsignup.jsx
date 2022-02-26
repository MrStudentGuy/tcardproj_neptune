import React from 'react';
import './loginsignup.css';
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});

const LoginSignupScreen = () => {
    return(
        <div className="login-signup-screen">
            <h1>Login/Signup</h1>
            <button onClick={signInWithRedirect(auth, provider)}>Signin with Google</button>
        </div>
    )
}

export default LoginSignupScreen;
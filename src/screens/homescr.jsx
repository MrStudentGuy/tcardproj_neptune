import React from 'react';
import HeaderElement from '../elements/header';
import './homescr.css';
import CardElement from '../elements/card';
import { doc, getDocs, collection, query, where } from 'firebase/firestore';
import { signInWithPopup } from "firebase/auth";
import { db, gProvider } from '../firebase';
import { getAuth } from 'firebase/auth';

const HomeScreen = () => {

    const cardName = "";
    const cardDesc = "";
    const cardOwnerUiD = "";

    const cardScraper = async () => {
        console.log(getAuth().currentUser.uid);
        const cardRef = collection(db, "Cards");
        const q = query(cardRef, where("ownerUiD", "==", getAuth().currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            cardName = doc.data().cardName;
            cardDesc = doc.data().cardDescription;
            cardOwnerUiD = doc.data().ownerUiD;
        });

        const userRef = collection(db, "Users");
        const q4user = query(userRef, where("uid", "==", cardName));
        const query4userSnapshot = await getDocs(q4user);
        query4userSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            cardName = doc.data().displayName;
        });
    }

    //Temp Not for prod
    const GoogleLogin = () => {
        signInWithPopup(getAuth(), gProvider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div className="homescrwrapper">
            <HeaderElement/>
            <div className="homeCont">
                <h1 class="title">Your Cards</h1>

                <div className="cardContainer">
                    {/* <CardElement name = {cardName} description = {cardDesc} owner = {cardOwnerUiD}/> */}
                </div>

                <button onClick = { GoogleLogin}>Do Login</button>
                <button onClick = { cardScraper }>Do Query</button>
            </div>
        </div>
    );
}

export default HomeScreen;
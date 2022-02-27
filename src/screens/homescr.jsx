import React from 'react';
import HeaderElement from '../elements/header';
import './homescr.css';
import CardElement from '../elements/card';

const HomeScreen = () => {
    return(
        <div className="homescrwrapper">
            <HeaderElement/>
            <div className="homeCont">
                <h1 class="title">Your Cards</h1>

                <div className="cardContainer">
                    <CardElement/>
                    <CardElement/>
                    <CardElement/>
                    <CardElement/>
                    <CardElement/>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
import React from 'react';
import { db, gProvider } from '../firebase';
import { doc, getDocs, collection, query, where } from 'firebase/firestore';
import './card.css';

const CardElement = (props) => {
    const ownerFind = async () => {
        const cardRef = collection(db, "Users");
        const q = query(cardRef, where("uid", "==", props.owner));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            return doc.data().displayName;
        });
    }
    
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <h3>{props.description}</h3>
            <h4>{ownerFind()}</h4>
        </div>
    )
}

export default CardElement;
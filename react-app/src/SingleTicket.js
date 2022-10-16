import React from "react";

import { db } from './firebase.js';
import { TextField, Button } from '@mui/material';

import { collection, query, where, orderBy, onSnapshot, addDoc, serverTimestamp, doc, getDoc, getFirestore, getDocs } from 'firebase/firestore';

import { useFirestoreQuery } from "@react-query-firebase/firestore";
import Error from './Error'
// import { firestore } from "../firebase";


import { Link, useParams } from 'react-router-dom'
function SingleTicket() {
    // const ref = query(collection(db, "todos"), where("id", "==", "sTgIbsYFK4B6iyEylhFi"));
    
    const { ticketId } = useParams()
    getThatDoc(ticketId);

    let data = getThatDoc(ticketId);
    console.log("helo");
    console.log(data);
    data.then(console.log(data.name));
   
    return (
        <section className='App ticket'>
            <div id="ticketName"></div>
            <Link to={{pathname: "confirm", state: ticketId}}>BUY</Link>
            <Link to="/tickets">Back to tickets</Link>
        </section>
    )
}

// var buyButton = document.getElementById("buyTicket");

async function getThatDoc(ticketId) {
    console.log(ticketId)
    const docRef = doc(db, 'todos', ticketId);
    console.log("salam")

    // docSnap.data();
    
    try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            // return docSnap.data();
            console.log(docSnap.data().date)
            document.getElementById('ticketName').innerHTML = `<h2>${docSnap.data().name}</h2> <h2>${docSnap.data().date}</h2>
            <h2>${docSnap.data().price}</h2>
            <h3>${docSnap.data().info}</h3>`;
        } else {
            console.log("Document does not exist")
    }
    } catch(error) {
        console.log(error)
    }
}

export default SingleTicket
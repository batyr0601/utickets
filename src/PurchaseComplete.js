import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import Navbar from './Navbar'
import { db } from './firebase.js';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom'
import { getFirestore, deleteDoc, collection, query, where, addDoc, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';

function PurchaseComplete() {

    const { ticketId } = useParams()
    console.log("kazakshtan")
    getTheStats(ticketId)

    return (
        <div class="App">
            <h3>Your seller is</h3>
            <h2 id="name"></h2>
            <h3>You can reach them through</h3>
            <h2 id="email"></h2>
            <h2 id="phone"></h2>
        </div>
    )
}

async function getTheStats(ticketId) {
    console.log(ticketId)
    const docRef = doc(db, 'todos', ticketId);

    // docSnap.data();

    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            // return docSnap.data();
            var ownerID = docSnap.data().ownerID;
        } else {
            console.log("Document does not exist")
        }
    } catch (error) {
        console.log(error)
    }
    console.log(ownerID)
    let qWORK = query(collection(db, "Users"), where("uid", "==", ownerID));
    let q2WORK = await getDocs(qWORK);
    console.log(q2WORK);
    let userDocId = null;
    if (q2WORK.size > 0) {
        userDocId = q2WORK.docs[0].id;
        if (userDocId) {
            let qUSER = query(doc(db, "Users", userDocId))
            let qUSER2 = await getDoc(qUSER)
            let userDocData = qUSER2.data()
            document.getElementById("name").innerHTML = userDocData.fname + " " + userDocData.lname;
            document.getElementById("email").innerHTML = userDocData.email;
            document.getElementById("phone").innerHTML = userDocData.phone;
            deleteDoc(doc(db, 'todos', ticketId))
        }
    }
}

export default PurchaseComplete
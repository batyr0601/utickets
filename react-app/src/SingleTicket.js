import React from "react";

import { db } from './firebase.js';
import { collection, query, where, orderBy, onSnapshot, addDoc, serverTimestamp, doc, getDoc, getFirestore, getDocs } from 'firebase/firestore';

import { useFirestoreQuery } from "@react-query-firebase/firestore";
import Error from './Error'
// import { firestore } from "../firebase";


import { Link, useParams } from 'react-router-dom'
function SingleTicket() {

    const ref = query(collection(db, "todos"), where("id", "==", "sTgIbsYFK4B6iyEylhFi"));

    // const query = useFirestoreQuery(["todos"], ref);

    // const { data, status, error } = useFirestoreQuery(
    //     db.collection("todos").doc({ ticketId })
    // );

    // if (status === "loading") {
    //     return "Loading...";
    // }
    // if (status === "error") {
    //     return `Error: ${error.message}`;
    // }
    // return (
    //     <div>
    //         <h3>{data.name}</h3>
    //     </div>
    // );
    // if (query.isLoading) {
    //     return <div>Loading...</div>;
    // }

    // const snapshot = query.data;

    // return snapshot.docs.map((docSnapshot) => {
    //     const data = docSnapshot.data();

    //     return <div key={docSnapshot.id}>{data.name}</div>;
    // });

    // const getTicket = query(
    //     collection(db, 'todos'),
    //     where('id', '==', { ticketId })
    // );
    // const [input, setInput] = useState('');

    // useEffect(() => {
    //     onSnapshot(getTicket, (snapshot) => {
    //         setTickets(snapshot.docs.map(doc => ({
    //             id: doc.id,
    //             data: doc.data()
    //         })))
    //     })
    // }, [input])

    
    const { ticketId } = useParams()
    console.log("hello");
    console.log(getThatDoc(ticketId))
    // getThatDoc(ticketId).then(value=>console.log(value))

    let data = getThatDoc(ticketId);
    console.log("helo");
    console.log(data);
    data.then(console.log(data.name));
    // getThatDoc(ticketId).then(value=> {return (
    //     <section className='App ticket'>
    //         <h2>{value.name}</h2>
    //         <Link to="/tickets">Back to tickets</Link>
    //     </section>
    // ) }).catch(err => {return (
    //     <Error />
    // )})
    // const data = 0;
    // console.log(data)
    // console.log(name);
    // console.log(get(ticketId));
    return (
        <section className='App ticket'>
            <h2>{ticketId}</h2>
            <Link to="/tickets">Back to tickets</Link>
        </section>
    )
}

// async function pullData(ticketId) {
//     let data = async getThatDoc(ticketId)
// }
async function getThatDoc(ticketId) {
    console.log(ticketId)
    const docRef = doc(db, 'todos', ticketId);
    console.log("salam")

    // docSnap.data();
    
    // try {
    //     const docSnap = await getDoc(docRef);
    //     if(docSnap.exists()) {
    //         return docSnap.data().name;
    //     } else {
    //         console.log("Document does not exist")
    //     }
    
    // } catch(error) {
    //     console.log(error)
    // }
    // querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    console.log("salam")
}
export default SingleTicket
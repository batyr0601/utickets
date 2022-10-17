import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import Navbar from './Navbar'
import { db } from './firebase.js';
import DeleteIcon from '@mui/icons-material/Delete';
import { doc, deleteDoc } from "firebase/firestore";

import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { Link, Outlet } from 'react-router-dom'



function TicketsListed() {
    const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));

    const [tickets, setTickets] = useState([]);

    // const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    // const [ticketName, setInputName] = useState('');
    // const [{ticketDate}, setInputDate] = useState(Date());

    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            setTickets(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [input])
    return (
        <div className="App">
            <div>
                <img src="/images/background-header.png" class="background" alt="peopleBackground"  />
                <img src="/images/UTickets.png" class="logo" alt="logo" />
            </div>
            <h2>All tickets</h2>
            <ul>
                {/* <Link to={'/tickets/'}></Link> */}
                {tickets.map(item => {
                    return (
                        <article key={item.id} className="ticketsDisplayed">
                            {/* <h5>{item.data.todo}</h5> */}
                            <Link to={`/tickets/${item.id}`} className="ticketDisplayed">
                                <div>
                                    <h2>{item.data.name}</h2>
                                    <h3>{item.data.date}</h3>
                                    <h3>{item.data.price}</h3>
                                </div>
                            </Link>
                            <DeleteIcon fontSize="large" style={{ opacity: 0.7 }} onClick={() => { deleteDoc(doc(db, 'todos', item.id)) }} />

                        </article>
                    );
                })}
                {/* // <Todo key={item.id} arr={item} />)} */}

                {/* {todos.map(item => <Todo key={item.id} arr={item} />)} */}
            </ul>

        </div>
    )
}

export default TicketsListed;
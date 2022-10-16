import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import { db } from './firebase.js';
import SellTicket from './SellTicket';
import TicketsListed from './TicketsListed';
import Error from './Error';
import Home from './Home'
import SharedLayout from './SharedLayout'
import SingleTicket from './SingleTicket'
import ConfirmBuy from './ConfirmBuy'
import PurchaseComplete from './PurchaseComplete'

import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css';

const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
function TicketsScreen() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // const [ticketName, setInputName] = useState('');
  // const [{ticketDate}, setInputDate] = useState(Date());

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, [input])
  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'todos'), {
      todo: input,
      timestamp: serverTimestamp()
    })
    setInput('')
  };
  return (
    <BrowserRouter>
      {/* <nav>navbar</nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tickets" element={<TicketsListed />} />
          <Route path="tickets/:ticketId" element={<SingleTicket />} />
          <Route path="tickets/:ticketId/confirm" element={<ConfirmBuy />} />
          <Route path="tickets/:ticketId/confirm/complete" element={<PurchaseComplete />} />

          <Route path="sellticket" element={<SellTicket />} />
          <Route path="*" element={<Error />} />
        </Route>
        {/* <Route path="/ticketsListed" element={<TicketsListed />} /> */}

      </Routes>
      {/* <footer>footer</footer> */}
      <Button id='signOutButton'>Sign out</Button>
      <Button id='editProfile'>Edit profile</Button>
    </BrowserRouter>
    
  );
}

export default TicketsScreen;

{/* <div className="App">
        <h2> UTickets</h2>
        <Routes>
          <Route path="/">
            <TicketsListed />
          </Route>
          {/* <Route path="/">
            <SellTicket />
          </Route> */}
    //    </Routes>
  //    </div> */}
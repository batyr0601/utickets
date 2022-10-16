import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import { db } from './firebase.js';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { Link } from 'react-router-dom'



function SellTicket() {
    const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
    const addTodo = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'todos'), {
            name: name,
            date: date,
            price, price,
            info: info,
            timestamp: serverTimestamp()
        })
        setName('')
        setDate(dt.substring(0, dt.indexOf(':', dt.indexOf(':')+1)))
        setPrice('')
        setInfo('')
    };
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState('');
    const d = new Date();
    const dt = d.toISOString();
    const [date, setDate] = useState(dt.substring(0, dt.indexOf(':', dt.indexOf(':')+1)));
    // console.log(document.write(dt.toISOString()));
    // const [date, setDate] = useState(document.write(dt.toISOString()));
    const [price, setPrice] = useState('');
    const [info, setInfo] = useState('');


    return (
        <div className='App'>
            {/* <Link to='/' className='btn'>
                Back to All Tickets
            </Link> */}
            <form>
                <h3>Event the ticket is for:</h3>
                <TextField id="outlined-basic" label="i.e. UT vs Alabama football game" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={name}
                    onChange={e => setName(e.target.value)} />
                <h3>Date of the event:</h3>
                <input type = "datetime-local" label="Enter Date" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={date} onChange= {e => setDate(e.target.value)} /> 
                <h3>Price you are selling for:</h3>
                <TextField id="outlined-basic" label="i.e. $15" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={price}
                    onChange={e => setPrice(e.target.value)} />
                <h3>Additional information:</h3>
                <TextField id="outlined-basic" label="Additional Info" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={info}
                    onChange={e => setInfo(e.target.value)} />
                {/* <TextField id="outlined-basic" label="Enter your ticket" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={input2}
            onChange={e => setInput(e.target.value)} /> */}
                {/* <input type = "date" onChange= {e => setInputDate(e.target.value)}>Date</input> */}
                {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
                {/* <input type="date" id="start" name="trip-start" value={ moment(this.state.item.requested_order_ship_date).format("DD-MMM-YYYY") } min="2018-01-01" max="2018-12-31"> */}
            </form>
            <Button variant="contained" color="primary" onClick={addTodo}>Post your ticket</Button>

        </div>

    )
}

export default SellTicket;
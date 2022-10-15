import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import { db } from './firebase.js';
import { collection , query, orderBy , onSnapshot, addDoc,serverTimestamp} from 'firebase/firestore';
import './App.css';

const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
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
    <div className="App">
      <h2> UTickets</h2>
      <form>
        <TextField id="outlined-basic" label="Enter your ticket" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={input}
          onChange={e => setInput(e.target.value)} />
        
        {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
        {/* <input type="date" id="start" name="trip-start" value={ moment(this.state.item.requested_order_ship_date).format("DD-MMM-YYYY") } min="2018-01-01" max="2018-12-31"> */}
        <Button variant="contained" color="primary" onClick={addTodo}  >Add your ticket</Button>
      </form>
      <ul>
        {todos.map(item => <Todo key={item.id} arr={item} />)}
      </ul>
    </div>
  );
}

export default App;
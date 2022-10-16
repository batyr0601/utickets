import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import { db } from './firebase.js';
import { collection , query, orderBy , onSnapshot, addDoc,serverTimestamp} from 'firebase/firestore';
import './App.css';

const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
function SignIn() {
  return (
    <h2 class = "erik"> signin</h2>
  )
}

export default SignIn;
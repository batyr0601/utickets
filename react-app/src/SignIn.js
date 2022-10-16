import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import './SignIn.css';



function SignIn() {
  return (
    <div>
        
      <img src="/images/UTickets.png" id="UTickets"></img>
      <br></br>

      <button id="signInButton"><img id="googleImg" src="/images/signInButton.png"></img></button>
    </div>
    )
}

export default SignIn;
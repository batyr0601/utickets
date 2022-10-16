import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
// import './SignIn.css';



function SignIn() {
  return (
    <div>
      <h2>Sign In To Use UTickets</h2>
      <Button id="signInButton">Sign In With Google</Button>
    </div>
    )
}

export default SignIn;
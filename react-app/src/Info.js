import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import './Info.css';





function Info() {
  return (
    <div>
      <h2>User Details</h2>
    
        <form>

            <label>First Name</label> <br></br>
            <input type="text" id="fname"></input><br></br>

            <label>Last Name</label> <br></br>
            <input type="text" id="lname"></input><br></br>

            <label>Email</label> <br></br>
            <input type="email" id="email"></input><br></br>

            <label>Phone Number</label> <br></br>
            <input type="number" id="phone"></input>
        </form>

        <button id="submitInfoButton">Continue</button>
        <div id="errorMessageDiv"></div>

    </div>
    )
}

export default Info;
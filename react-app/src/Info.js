import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './components/Todo';
import './Info.css';






function Info() {
  return (
    <div>
      <img src="./images/UTickets.png"></img>
      <h2>User Details</h2>
    
        <form>

            <div class="group">
            <label>First Name</label> <br></br>
            <input id="fname" class="field"></input>
            </div>

            <div class="group">
            <label>Last Name</label> <br></br>
            <input id="lname" class="field"></input>
            </div>


            <div class="group">

            <label>Email</label> <br></br>
            <input id="email" class="field"></input>

            </div>

            <div class="group">

            <label>Phone Number</label> <br></br>
            <input id="phone" class="field"></input>
            </div>

        </form>

        <button id="submitInfoButton">Continue</button>
        <div id="errorMessageDiv"></div>

    </div>
    )
}

export default Info;
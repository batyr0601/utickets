import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicketScreen from './TicketScreen';
import SignIn from './SignIn'

// create a react context to see if the user is logged in
// react rounter
// app will have a case switch path
// /ticket/:id
// hook from usedParam lets us pull the idea
// 
var signIn = true;
if (signIn) {
    ReactDOM.render(
        <React.StrictMode>
            <TicketScreen />
        </React.StrictMode>,
        document.getElementById('root')
    );
} else {
    ReactDOM.render(
        <React.StrictMode>
            <SignIn />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
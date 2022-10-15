import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './SignIn'

var signIn = false;
if (signIn) {
    ReactDOM.render(
        <React.StrictMode>
            <App />
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
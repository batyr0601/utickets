import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './SignIn';
import Info from './Info';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import { getFirestore, collection, query, where, addDoc, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCf491JPrAezraSmHXQDbLxFB2sfE9Y5rE",
    authDomain: "utickets-5446b.firebaseapp.com",
    projectId: "utickets-5446b",
    storageBucket: "utickets-5446b.appspot.com",
    messagingSenderId: "603500116602",
    appId: "1:603500116602:web:c4e00d1aacc70761f359c3",
    measurementId: "G-YRVPZ8VSE9"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
var user = null;


controller();

function onInfoButtonSubmit(docId) {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");


    if (fname.value != "" && lname.value != "" && email.value != "" && phone.value != "") {

        if (docId != null){
            setDoc(doc(db, "Users", docId), {
                email: email.value,
                fname: fname.value,
                lname: lname.value,
                phone: phone.value,
                uid: user.uid
            });

        } else {
            addDoc(collection(db, "Users"), {
                email: email.value,
                fname: fname.value,
                lname: lname.value,
                phone: phone.value,
                uid: user.uid
            });
        }
        
        renderTicketScreen();
        
    } else {

        const messageDiv = document.getElementById("errorMessageDiv")

        messageDiv.innerHTML = "<p id='errorMessage'>some information wasn't complete</p>"
        
    }
    
}

function renderTicketScreen() {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    )
    let signOutButton = document.getElementById("signOutButton")
    let editProfileButton = document.getElementById("editProfile");
    signOutButton.onclick = () => signOut(auth, provider);
    editProfileButton.onclick = () => renderInfo();

}

async function renderInfo() {
    ReactDOM.render(
        <React.StrictMode>
            <Info />
        </React.StrictMode>,
        document.getElementById('root')
    );

    let q = query(collection(db, "Users"), where("uid", "==", user.uid));
    let q2 = await getDocs(q);
    let userDocId = null;
    if(q2.size > 0) {
        userDocId = q2.docs[0].id;

        if (userDocId) {
            q = query(doc(db, "Users", userDocId))
            q2 = await getDoc(q)
            let userDocData = q2.data()
            document.getElementById("fname").value = userDocData.fname;
            document.getElementById("lname").value = userDocData.lname;
            document.getElementById("email").value = userDocData.email;
            document.getElementById("phone").value = userDocData.phone;
        }
    }

    let submitInfoButton = document.getElementById("submitInfoButton");
    submitInfoButton.onclick = () => onInfoButtonSubmit(userDocId);
}

function renderSignIn() {

    ReactDOM.render(
        <React.StrictMode>
            <SignIn />
        </React.StrictMode>,
        document.getElementById('root')
    );

    let signInButton = document.getElementById("signInButton")
    signInButton.onclick = () => signInWithPopup(auth, provider);
    
}

async function queryResultAndRenderNextScreen() {
        
    const q = query(collection(db, "Users"), where("uid", "==", user.uid));
    const q2 = await getDocs(q);
    if (q2.size > 0) {
        renderTicketScreen();
    } else {
        renderInfo();
    }     
}

function controller() {

    renderSignIn();

    onAuthStateChanged(auth, (u) => {

        if (u) {
    
            user = u

            queryResultAndRenderNextScreen();
    
        } else {
    
            user = null
        
            renderSignIn();
        }
    
    });

}

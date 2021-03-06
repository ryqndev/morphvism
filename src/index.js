import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MemoryRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyA8zmIV78Prur4OFUNXklEgCrV3TkI38Q8",
    authDomain: "treehacks-d9130.firebaseapp.com",
    databaseURL: "https://treehacks-d9130.firebaseio.com",
    projectId: "treehacks-d9130",
    storageBucket: "treehacks-d9130.appspot.com",
    messagingSenderId: "959568977585",
    appId: "1:959568977585:web:f409050a81fc1756018c90"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <Router
        initialEntries={['/', '/login', '/app']}
        initialIndex={0} 
    >
        <App />
    </Router>, document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

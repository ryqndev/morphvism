import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let db;
const init = () => {
    db = firebase.firestore(); 
    db.enablePersistence().catch( err => {
        if (err.code === 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
        } else if (err.code === 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
        }
    });
}

const checkIfLoggedIn = ( callback ) => {
    firebase.auth().onAuthStateChanged( user => {
        if(user) setUserData(user);
        callback(user);
    });
}
const setUserData = (user) => {
    let userData = {
        name: user.displayName,
        email: user.email,
        emailverified: user.emailVerified,
        anon: user.isAnonymous,
        id: user.uid
    };

    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
}
const add = (data) => {
    db.collection("users").doc(JSON.parse(localStorage.getItem('user')).id).set(data)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

export default {
    init: init,
    login: {
        check: checkIfLoggedIn
    },
    add: add
}
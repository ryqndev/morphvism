import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import './Login.scss';

const Login = () => {
    useEffect(() => {
        let ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#auth-container', {
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
            ],
            // tosUrl: '<your-tos-url>',
        });
    })
	return (
		<div className="login-wrapper">
            <div id="auth-container"></div>
		</div>
	);
}

export default Login;

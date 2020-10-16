import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

import logo from '../../images/logos/logo.png';
import googleLogo from '../../images/google.png';

import './Login.css';
import firebaseConfig from './firebase.config';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } }

    var googleLoginProvider = new firebase.auth.GoogleAuthProvider();


    const handleGoogleLogin = () => {

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().signInWithPopup(googleLoginProvider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, photoURL }
            setLoggedInUser(signedInUser);
            storeAuthToken();

        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });

        const storeAuthToken = () => {
            firebase.auth().currentUser.getIdToken(true)
                .then(function (idToken) {
                    sessionStorage.setItem('token', idToken);
                    history.replace(from);
                }).catch(function (error) {

                });
        }

    }

    return (
        <div className="text-center">
            <div className="my-5">
                <a className="navbar-brand" href="/"><img src={logo} alt="" style={{ height: '50px' }} /></a>
            </div>
            <div className="login-form">
                <h3>Login with</h3>
                <button onClick={handleGoogleLogin} className="btn w-70 border my-2">
                    <img src={googleLogo} style={{ height: '30px' }} alt="" /> Continue with Google
                </button>
                <p>Don’t have an account? <a href="" onClick={handleGoogleLogin}>Create an account</a></p>
            </div>
        </div>
    );
};

export default Login;
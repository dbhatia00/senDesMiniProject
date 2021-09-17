//Firebase.js

//Modules needed for Firebase.js
//Main Firebase import
import firebase from 'firebase/app';

//Firebase auth import (authentication)
import 'firebase/auth';

//Firebase firestore import (database)
import 'firebase/firestore';

//Firebase Configuration provided by Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBafUUKOO1SSKOM98AKAFtKTGJwzCVjdvo",
    authDomain: "miniproject-1c8a1.firebaseapp.com",
    projectId: "miniproject-1c8a1",
    storageBucket: "miniproject-1c8a1.appspot.com",
    messagingSenderId: "467480740164",
    appId: "1:467480740164:web:d7b0a4b0abe0d89c88d711",
    measurementId: "G-7DCRRLL4MJ"
};

//Declare app
let app;
//Check if app has been initialized with Firebase...if not initialize
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

//db serves as database
const db = app.firestore();
//auth serves as authentication
const auth = firebase.auth();
//provider allows access to Google provider data
const provider = new firebase.auth.GoogleAuthProvider();

//export db, auth, and provider
export {db, auth, provider};
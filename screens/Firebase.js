import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBafUUKOO1SSKOM98AKAFtKTGJwzCVjdvo",
    authDomain: "miniproject-1c8a1.firebaseapp.com",
    projectId: "miniproject-1c8a1",
    storageBucket: "miniproject-1c8a1.appspot.com",
    messagingSenderId: "467480740164",
    appId: "1:467480740164:web:d7b0a4b0abe0d89c88d711",
    measurementId: "G-7DCRRLL4MJ"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
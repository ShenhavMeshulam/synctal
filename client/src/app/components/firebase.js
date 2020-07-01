import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCue5kAWBJrxZOII5RQJlbJsbMHDXieQfA",
    authDomain: "synctal-8e0c0.firebaseapp.com",
    databaseURL: "https://synctal-8e0c0.firebaseio.com",
    projectId: "synctal-8e0c0",
    storageBucket: "synctal-8e0c0.appspot.com",
    messagingSenderId: "1033032200609",
    appId: "1:1033032200609:web:17300cc946a7a01e175be0",
    measurementId: "G-MK20ZZ7XL5"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
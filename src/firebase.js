import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCMDcGYfqdCWHUd_WM6r4hxfHS5uQ7yz6g",
    authDomain: "gritty-students-7bb1f.firebaseapp.com",
    projectId: "gritty-students-7bb1f",
    storageBucket: "gritty-students-7bb1f.appspot.com",
    messagingSenderId: "902130691905",
    appId: "1:902130691905:web:f9186ec475f2ee38eafbc0",
    measurementId: "G-WYZH6E9HJB"
});

const fb = firebase;

export default fb;
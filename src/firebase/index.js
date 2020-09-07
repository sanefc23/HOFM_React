import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBz_U8-gHUexdUcVJHhIOeWbmvfTSHxEVM",
    authDomain: "hofm-react.firebaseapp.com",
    databaseURL: "https://hofm-react.firebaseio.com",
    projectId: "hofm-react",
    storageBucket: "hofm-react.appspot.com",
    messagingSenderId: "573990564618",
    appId: "1:573990564618:web:cdb77004bdb8eaf9e080f3",
    measurementId: "G-SPHFCJMQD9"
});

export function getFirebase() {
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}
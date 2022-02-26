import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAL-4_lTtPBJX7EbMJuHm3r7CxnQNA2kUU",
    authDomain: "eshop-8e9c9.firebaseapp.com",
    projectId: "eshop-8e9c9",
    storageBucket: "eshop-8e9c9.appspot.com",
    messagingSenderId: "108335439602",
    appId: "1:108335439602:web:99fe9c019431980744fa6b",
    measurementId: "G-HQJ0V6JPBX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };
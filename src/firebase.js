import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC8peultYJZW936Zdb4mr2Zj8NODj_3aoo",
    authDomain: "twitter-jq.firebaseapp.com",
    databaseURL: "https://twitter-jq.firebaseio.com",
    projectId: "twitter-jq",
    storageBucket: "twitter-jq.appspot.com",
    messagingSenderId: "649946985402",
    appId: "1:649946985402:web:063523ab837d3ad62c6383",
    measurementId: "G-DZH9D7NPPN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
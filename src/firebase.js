import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDjeOCEeQ3hzUby8Ly6hTXYNobl9XroA8Q",
    authDomain: "machinetest-6daa7.firebaseapp.com",
    projectId: "machinetest-6daa7",
    storageBucket: "machinetest-6daa7.appspot.com",
    messagingSenderId: "290119469084",
    appId: "1:290119469084:web:6c3b3922b16f52a6dfb7d9",
    measurementId: "G-W4CFZWD0NV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };

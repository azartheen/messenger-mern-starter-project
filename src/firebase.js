import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // your Firebase credentials go here
     apiKey: "AIzaSyDH2UH-zUjqesU6WzCwDLNvJzdzXXwy2tA",
    authDomain: "messenger-9b2e0.firebaseapp.com",
    projectId: "messenger-9b2e0",
    storageBucket: "messenger-9b2e0.appspot.com",
    messagingSenderId: "940744584790",
    appId: "1:940744584790:web:baf992204be496016f55f7",
    measurementId: "G-W74Z8HGWZW"
})

const db = firebaseApp.firestore()

export default db

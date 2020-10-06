// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAz_5wnR6849hAIxzNPBHtM_1Z9q-igy7g",
    authDomain: "first-ecommerce-site.firebaseapp.com",
    databaseURL: "https://first-ecommerce-site.firebaseio.com",
    projectId: "first-ecommerce-site",
    storageBucket: "first-ecommerce-site.appspot.com",
    messagingSenderId: "52043857459",
    appId: "1:52043857459:web:a9c68bf3c4d0bf490b2d46",
    measurementId: "G-8178PQ5FJ0"
  };
//this is where we initialize the app WITH firebase
  const firebaseApp =firebase.initializeApp(firebaseConfig);

//this is the firebase database of the app
  const db = firebaseApp.firestore();
//creates a variable {auth} that we can use to handle all the Sign Ins and user autentication
  const auth= firebase.auth();

  export {db, auth, firebaseApp};
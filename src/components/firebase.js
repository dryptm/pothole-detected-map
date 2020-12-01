import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBjHj_ANrtzp2hxUzW-BIcXb_ELUjpZJP4",
  authDomain: "pothole-location-296720.firebaseapp.com",
  databaseURL: "https://pothole-location-296720.firebaseio.com",
  projectId: "pothole-location-296720",
  storageBucket: "pothole-location-296720.appspot.com",
  messagingSenderId: "548340777226",
  appId: "1:548340777226:web:f91fb271367fe0a0e7baf3",
  measurementId: "G-GZ0QKKMJ1H"
};

const holxx = firebase.initializeApp(firebaseConfig);
const db = holxx.firestore();

export default db;

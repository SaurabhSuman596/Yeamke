import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBgnbLmahSlOjDv3IpCIvKUOAiaIowSfw",
  authDomain: "yeamke-6d38b.firebaseapp.com",
  projectId: "yeamke-6d38b",
  storageBucket: "yeamke-6d38b.appspot.com",
  messagingSenderId: "73171891987",
  appId: "1:73171891987:web:01473d732c77fec5874ce6",
  measurementId: "G-P8VH8LDEBH",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();

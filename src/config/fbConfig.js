import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAJp8PRgspsj4QtwZTP9NIMiu59mwoprOU",
  authDomain: "tyme150.firebaseapp.com",
  databaseURL: "https://tyme150.firebaseio.com",
  projectId: "tyme150",
  storageBucket: "",
  messagingSenderId: "293508454825",
  appId: "1:293508454825:web:a4710bf94d5bbb9939ccb8"
};

firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;

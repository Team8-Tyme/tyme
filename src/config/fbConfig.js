import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyC0klb2etNBB48LBEJzaBNPaJ261UIxU3w",
    authDomain: "tyme-25aa9.firebaseapp.com",
    databaseURL: "https://tyme-25aa9.firebaseio.com",
    projectId: "tyme-25aa9",
    storageBucket: "tyme-25aa9.appspot.com",
    messagingSenderId: "141863250977",
    appId: "1:141863250977:web:53180881a62f040bab4760"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
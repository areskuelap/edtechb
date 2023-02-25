import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5VL1Xs8FliBdUJxbVNZL3LTNb4rZanyE",
    authDomain: "marcaas-3ac75.firebaseapp.com",
    databaseURL: "https://marcaas-3ac75-default-rtdb.firebaseio.com",
    projectId: "marcaas-3ac75",
    storageBucket: "marcaas-3ac75.appspot.com",
    messagingSenderId: "635309634485",
    appId: "1:635309634485:web:9993bee451f86fe2da5ffc",
    measurementId: "G-53SFGBFH0T"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export { db };
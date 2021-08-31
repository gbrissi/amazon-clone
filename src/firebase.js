import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD9NQH-IKbZroZ09zl_CDbwEaGBt0brE_U",
    authDomain: "clone-25cd2.firebaseapp.com",
    projectId: "clone-25cd2",
    storageBucket: "clone-25cd2.appspot.com",
    messagingSenderId: "210356938895",
    appId: "1:210356938895:web:291de345e851d6e240e8fa",
    measurementId: "G-46NWP02FCG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
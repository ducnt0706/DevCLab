import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDahr9tPwzI8Y8k1OpVDWuqmHWyhh9V_qQ",
  authDomain: "devctourial.firebaseapp.com",
  databaseURL: "https://devctourial.firebaseio.com",
  projectId: "devctourial",
  storageBucket: "devctourial.appspot.com",
  messagingSenderId: "791776621744",
  appId: "1:791776621744:web:6f8d97f3e262fa73be7775",
  measurementId: "G-M6GYJTB05F",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const database = firebase.database();

export default firebase;

//TODO: COPY THIS TO IGNORE WARNING LOG
//import { LogBox } from 'react-native';
//LogBox.ignoreLogs(['Setting a timer for a long period of time'])
//MY ACCOUNT
// apiKey: "AIzaSyDahr9tPwzI8Y8k1OpVDWuqmHWyhh9V_qQ",
//   authDomain: "devctourial.firebaseapp.com",
//   databaseURL: "https://devctourial.firebaseio.com",
//   projectId: "devctourial",
//   storageBucket: "devctourial.appspot.com",
//   messagingSenderId: "791776621744",
//   appId: "1:791776621744:web:6f8d97f3e262fa73be7775",
//   measurementId: "G-M6GYJTB05F"

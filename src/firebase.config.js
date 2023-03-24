import {getApp , getApps,initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyD7-htXtbQvUn16EkEAy1z5yy57u6X8wvQ",
    authDomain: "fullstacke-8166d.firebaseapp.com",
    databaseURL: "https://fullstacke-8166d-default-rtdb.firebaseio.com",
    projectId: "fullstacke-8166d",
    storageBucket: "fullstacke-8166d.appspot.com",
    messagingSenderId: "1094991606970",
    appId: "1:1094991606970:web:307c215f9c525f73717e83"
  };

const app = getApps.Length >0 ? getApp() :initializeApp(firebaseConfig);
const firestore = getFirestore(app)  
const storage = getStorage(app)

export{app,firestore,storage};
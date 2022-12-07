import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCY10-8rf5MfWL1VNWnKYG_b4dogJX2odA",
  authDomain: "clothingapp-1f197.firebaseapp.com",
  databaseURL: "https://clothingapp-1f197-default-rtdb.firebaseio.com",
  projectId: "clothingapp-1f197",
  storageBucket: "clothingapp-1f197.appspot.com",
  messagingSenderId: "318379295880",
  appId: "1:318379295880:web:cbf3d19154a54c675c0b3d",
  measurementId: "G-HQ0MFE1R31"

};

const appfb = initializeApp(firebaseConfig);

function writeUserData(userId, name, email, imageUrl) { 
    

const database = getDatabase();
const reference = ref(database, 'users/' + userId);

set(reference, {
username: name,
email: email,
profile_picture : imageUrl
    
});
}

writeUserData("hey", "yo", "hi", "wee");
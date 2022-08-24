import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCWYJAtZnr1HYhCSK9d9u1hyQz50hcYp2w",
    authDomain: "vilatte-comision34705.firebaseapp.com",
    projectId: "vilatte-comision34705",
    storageBucket: "vilatte-comision34705.appspot.com",
    messagingSenderId: "735749405830",
    appId: "1:735749405830:web:54910ba546be9d5fbd6507"
  };

 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)


 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCIVTkaCEe-E71FmXQPlnSUtAfvY03GUBg",
    authDomain: "vilatte-react37405.firebaseapp.com",
    projectId: "vilatte-react37405",
    storageBucket: "vilatte-react37405.appspot.com",
    messagingSenderId: "415008968958",
    appId: "1:415008968958:web:f7d8096d31d0ad703b95af",
    measurementId: "G-V651VZKJVE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
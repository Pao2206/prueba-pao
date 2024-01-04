import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSX8YtZrNBIv1d23d3FXlPoGjO21EmaJc",
  authDomain: "app-prueba-pao.firebaseapp.com",
  databaseURL: "https://app-prueba-pao-default-rtdb.firebaseio.com",
  projectId: "app-prueba-pao",
  storageBucket: "app-prueba-pao.appspot.com",
  messagingSenderId: "537131413346",
  appId: "1:537131413346:web:73c089951f8c91f4bf863b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)
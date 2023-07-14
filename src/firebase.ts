// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlYlI6uE7akFHWYFz9mVLx8kzMbrgpKEA",
  authDomain: "food-mds.firebaseapp.com",
  databaseURL: "https://food-mds-default-rtdb.firebaseio.com",
  projectId: "food-mds",
  storageBucket: "food-mds.appspot.com",
  messagingSenderId: "347637651471",
  appId: "1:347637651471:web:39d3eb06a0b6f2d4d42b7a"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
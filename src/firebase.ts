import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
  // your application settings
  apiKey: "AIzaSyAlYlI6uE7akFHWYFz9mVLx8kzMbrgpKEA",
  authDomain: "food-mds.firebaseapp.com",
  databaseURL: "https://food-mds-default-rtdb.firebaseio.com",
  projectId: "food-mds",
  storageBucket: "food-mds.appspot.com",
  messagingSenderId: "347637651471",
  appId: "1:347637651471:web:39d3eb06a0b6f2d4d42b7a"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')
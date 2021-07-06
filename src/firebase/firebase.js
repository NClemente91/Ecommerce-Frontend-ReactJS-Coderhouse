import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDE_snRs9C08deGPJFNkk5zUEl4N8MB-gU",
  authDomain: "react-sg-ecommerce-nclemente.firebaseapp.com",
  projectId: "react-sg-ecommerce-nclemente",
  storageBucket: "react-sg-ecommerce-nclemente.appspot.com",
  messagingSenderId: "633809174941",
  appId: "1:633809174941:web:2940a10f90133991526f74",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFireStore = () => firebase.firestore(app);

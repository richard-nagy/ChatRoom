import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBfcANW61ZKWXAfbLNHZR0c4_VAS4spO44",
	authDomain: "chatroom-4b240.firebaseapp.com",
	projectId: "chatroom-4b240",
	storageBucket: "chatroom-4b240.appspot.com",
	messagingSenderId: "1069281935385",
	appId: "1:1069281935385:web:204ab3c8b5834e34c62a88",
	measurementId: "G-5ZSCHCRBFM",
};

const app = initializeApp(firebaseConfig);
export default getFirestore();

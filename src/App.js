import "./App.css";

import { onSnapshot, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";

function App() {
	const [message, setMessage] = useState([]);

	let username = "";
	let text = "";

	useEffect(
		() =>
			onSnapshot(collection(db, "messages"), (snapshot) => {
				console.log(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
				console.log(snapshot.docs.map((doc) => doc.data().text));
				setMessage(snapshot.docs.map((doc) => doc.data()).sort((a, b) => a.date - b.date));
			}),
		[]
	);

	const handleNew = async () => {
		const collectionRef = collection(db, "messages");
		const payload = { username: username, text: text, date: new Date() };
		const docRef = await addDoc(collectionRef, payload);
		console.log("id: " + docRef.id);
	};

	return (
		<div className="app">
			{message.map((item, key) => (
				<p key={key}>
					[{item.username}]: {item.text}
				</p>
			))}
			{/* <input type="text" onChange={(e) => (username = e.target.value)} /> */}
			<textarea onChange={(e) => (text = e.target.value)} />
			<div id="sendButton" onClick={() => console.log("y")}>
				🕊️
			</div>
		</div>
	);
}

export default App;

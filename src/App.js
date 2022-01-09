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
			<div className="messages">
				{message.map((item, key) => (
					<div className="message" key={key}>
						<div className="icon" />
						<div className="messageTexts">
							<div className="username">{item.username}</div>
							<div className="time">
								{item.date.toDate().toString().substring(0, 24)}
							</div>
							<div className="text">{item.text}</div>
						</div>
					</div>
				))}
			</div>

			{/* <input type="text" onChange={(e) => (username = e.target.value)} /> */}
			<textarea onChange={(e) => (text = e.target.value)} />
			<div id="sendButton" onClick={() => console.log("succes")}>
				🕊️
			</div>
		</div>
	);
}

export default App;

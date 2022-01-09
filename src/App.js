import "./App.css";

import Select from "./Select";

import { onSnapshot, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";

export default function App() {
	const [message, setMessage] = useState([]);
	const [username, setUserName] = useState("");
	const [color, setColor] = useState("red");

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
		const payload = { username: username, text: text, color: color, date: new Date() };
		const docRef = await addDoc(collectionRef, payload);
		console.log("id: " + docRef.id);
	};

	function setUserInfo(name, color) {
		setUserName(name);
		setColor(color);
		console.log(name);
	}

	return (
		<>
			{username === "" && <Select setUserInfo={setUserInfo} />}
			<div className="app">
				<div className="messages">
					{message.map((item, key) => (
						<div className="message" key={key}>
							<div className="icon" style={{ backgroundColor: item.color }} />
							<div className="messageTexts">
								<div className="username" style={{ color: item.color }}>
									{item.username}
								</div>
								<div className="time">
									{item.date.toDate().toString().substring(0, 24)}
								</div>
								<div className="text">{item.text}</div>
							</div>
						</div>
					))}
				</div>

				<textarea onChange={(e) => (text = e.target.value)} />
				<div id="sendButton" onClick={() => handleNew()}>
					🕊️
				</div>
			</div>
		</>
	);
}

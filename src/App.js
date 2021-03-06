import "./App.css";
import Select from "./Select";
import { onSnapshot, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";

export default function App() {
	const [messages, setMessages] = useState([]);
	const [username, setUserName] = useState("");
	const [color, setColor] = useState("red");
	let text = "";

	// Get all the messages from Firestore
	useEffect(() => {
		onSnapshot(collection(db, "messages"), (snapshot) => {
			setMessages(
				snapshot.docs
					.map((doc) => ({
						...doc.data(),
						id: doc.id,
					}))
					.sort((a, b) => b.date - a.date)
			);
		});
	}, []);

	// Upload message to Firestore
	// Don't send it if the message is empty or only contains space characters
	// If the total number of messages is more then 15, delete the oldest one
	const sendMessage = async () => {
		if (!(text.match(/^\s*$/) || []).length > 0) {
			document.getElementById("textarea").value = "";

			const collectionRef = collection(db, "messages");
			const payload = { username: username, text: text, color: color, date: new Date() };
			await addDoc(collectionRef, payload);

			(async () => {
				if (messages.length > 15) {
					const docRef = doc(db, "messages", messages[messages.length - 1].id);
					await deleteDoc(docRef);
				}
			})();
		}
	};

	// Function sent to the Select component
	// Gets the choosen color and name
	function setUserInfo(name, color) {
		setUserName(name);
		setColor(color);
	}

	return (
		<>
			{username === "" && <Select setUserInfo={setUserInfo} />}
			<div className="app">
				<div className="topBar">
					<div>Chat Room 1.0</div>
					<a href="https://github.com/richard-nagy/ChatRoom">GitHub</a>
				</div>
				<div className="messages">
					{messages.map((item, key) => (
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

				<textarea
					id="textarea"
					placeholder="Aa"
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							sendMessage();
						}
					}}
					onChange={(e) => {
						text = e.target.value;
					}}
				/>
				<div id="sendButton" onClick={() => sendMessage()}>
					???????
				</div>
			</div>
		</>
	);
}

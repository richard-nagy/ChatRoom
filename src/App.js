import "./App.css";

import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";

function App() {
	const [text, setText] = useState([]);

	useEffect(
		() =>
			onSnapshot(collection(db, "messages"), (snapshot) => {
				console.log(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
				console.log(snapshot.docs.map((doc) => doc.data().text));
				setText(snapshot.docs.map((doc) => doc.data()));
			}),
		[]
	);

	return (
		<div className="App">
			<h3>Messages:</h3>
			{text.map((item, key) => (
				<p key={key}>
					{item.username}: {item.text}
				</p>
			))}
		</div>
	);
}

export default App;

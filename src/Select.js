import { useState } from "react";
import "./Select.css";

export default function Select({ setUserInfo }) {
	const [userColor, setUserColor] = useState("red");
	let name = "";

	// List out 6 colored selectable circles
	function drawCircles() {
		const colors = ["red", "orange", "green", "blue", "purple", "pink"];
		let elements = [];

		colors.forEach((color) => {
			elements.push(
				<div
					className={color === userColor ? "focusCircle circle" : "circle"}
					style={{ backgroundColor: color }}
					onClick={() => setUserColor(color)}
				/>
			);
		});

		return elements;
	}

	// Send users name and color to the App component
	// But check if the name only contains numbers or letters
	function sendUserData() {
		if (/^([a-zA-Z0-9]{3,20})$/.test(name)) {
			setUserInfo(name, userColor);
		} else
			alert(
				"Error!\n\nUsername must:\n- Be between 3-20 characters\n- Contain only characters of the english alphabet or numbers"
			);
	}

	return (
		<>
			<div className="overlay" />
			<div className="select">
				<div className="colors">{drawCircles()}</div>
				<input
					type="text"
					placeholder="Enter Name"
					onKeyPress={(e) => {
						if (e.key === "Enter" && e.key) {
							e.preventDefault();
							sendUserData();
						}
					}}
					onChange={(e) => (name = e.target.value)}
				/>
				<button
					onClick={() => {
						sendUserData();
					}}
				>
					Let's Go
				</button>
			</div>
		</>
	);
}

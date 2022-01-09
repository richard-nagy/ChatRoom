import { useState } from "react";
import "./Select.css";

export default function Select({ setUserInfo }) {
	const [color, setColor] = useState("red");

	let name = "";

	function circle() {
		function circleStyle(color) {
			return {
				backgroundColor: color,
			};
		}

		const colors = ["red", "orange", "green", "blue", "purple", "pink"];

		let elements = [];

		colors.forEach((element) => {
			elements.push(
				<div
					className={element === color ? "focusCircle circle" : "circle"}
					style={circleStyle(element)}
					onClick={() => setColor(element)}
				></div>
			);
		});

		return elements;
	}

	function sendUserData() {
		if (/^([a-zA-Z0-9]{3,20})$/.test(name)) {
			setUserInfo(name, color);
		} else
			alert(
				"Error!\n\nUsername must:\n- Be between 3-20 characters\n- Contain only characters of the english alphabet or numbers"
			);
	}

	return (
		<div className="select">
			<div className="options">
				<div className="colors">{circle()}</div>
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
				></input>
				<button
					onClick={() => {
						sendUserData();
					}}
				>
					Let's Go
				</button>
			</div>
		</div>
	);
}

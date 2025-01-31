import React, { useState } from "react";

import ".././global.css";
import "./PhotoForm.css";

import officePhoto from "../assets/office.webp";

const PhotoForm = () => {
	const [result, setResult] = useState("Send message");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending...");
		const formData = new FormData(event.target);

		formData.append("access_key", "11d08b0e-16dc-4c62-b6ea-2cd59d92672d");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Message Sent Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	return (
		<div className="flexContainer">
			<div style={{ width: "100%" }}>
				<img src={officePhoto}></img>
				<figcaption>
					Or come visit our Cruisebook Design Center in Virginia. Just look for
					the lighthouse!
				</figcaption>
			</div>

			<form className="photoForm" onSubmit={onSubmit}>
				<input
					type="hidden"
					name="subject"
					value="Message from cruisebooksource.com"
				/>
				<input type="hidden" name="from_name" value="Cruisebook Source" />

				<div class="combo">
					<label for="name"> Name </label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name"
						required
					></input>
				</div>
				<div class="combo">
					<label for="email"> Email </label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email"
						required
					></input>
				</div>
				<div class="combo">
					<label for="message">Message</label>
					<textarea
						id="message"
						name="message"
						placeholder="Enter your message"
						required
					></textarea>
				</div>

				<button type="submit">{result}</button>
			</form>
		</div>
	);
};

export default PhotoForm;

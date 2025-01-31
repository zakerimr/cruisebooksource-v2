import React, { useState } from "react";

import "../global.css";
import "./QuoteForm.css";

import { Link } from "react-router-dom";

const QuoteForm = () => {
	const [result, setResult] = useState("Request a quote");

	// Dropdown
	const [selectedValue, setSelectedValue] = useState(null);
	const [showContent, setShowContent] = useState(false);

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
		setShowContent(true);
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending...");
		const formData = new FormData(event.target);

		// formData.append("access_key", "11d08b0e-16dc-4c62-b6ea-2cd59d92672d");

		formData.append("access_key", "5e37433f-9c2c-4e39-92de-2890155318d5");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Quote Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	return (
		<>
			<form className="quoteForm" onSubmit={onSubmit}>
				<input
					type="hidden"
					name="subject"
					value="Quote Request from cruisebooksource.com"
				/>
				<input type="hidden" name="from_name" value="Cruisebook Source" />

				<div className="combo">
					<label for="typeofquote">Choose item:</label>
					<select
						name="Type of Quote"
						value={selectedValue}
						onChange={handleChange}
						required
					>
						<option disabled="disabled" selected="selected" value={null}>
							Select from dropdown
						</option>
						<option value="Cruisebook">Cruisebook</option>
						<option value="Certificate">Certificate</option>
					</select>
				</div>

				{showContent && (
					<>
						<div className="doubleContainer">
							<div className="combo">
								<label htmlFor="name">Full Name</label>
								<input
									type="text"
									id="name"
									name="Full Name"
									placeholder={"Enter your name"}
									spellCheck="false"
									required
								></input>
							</div>
							<div className="combo">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									id="email"
									name="E-mail"
									placeholder={"Enter your email"}
									spellCheck="false"
									required
								></input>
							</div>
						</div>

						<div className="doubleContainer">
							<div className="combo">
								<label htmlFor="phone">Phone Number</label>
								<input
									type="tel"
									id="phone"
									name="Phone Number"
									spellCheck="false"
									pattern="[0-9]{10}"
									title="Enter a 10-digit phone number, excluding spaces and dashes."
									placeholder={"Enter your phone number"}
								></input>
							</div>
							<div className="combo">
								<label htmlFor="ship">Ship or Unit</label>
								<input
									type="text"
									id="ship"
									name="Ship or Unit"
									placeholder={"Enter your ship or unit"}
									spellCheck="false"
									required
								></input>
							</div>
						</div>

						<div className="doubleContainer">
							<div className="combo">
								<label htmlFor="numbooks">
									{selectedValue === "Cruisebook"
										? "Approximate Number of Books"
										: "Approximate Number of Certificates"}{" "}
								</label>
								<input
									type="number"
									id="numbooks"
									name={
										selectedValue == "Cruisebook"
											? "Number of Books"
											: "Number of Certificates"
									}
									placeholder={
										selectedValue === "Cruisebook"
											? "Enter number of books (minimum: 50)"
											: "Enter number of certificates (minimum: 10)"
									}
									spellCheck="false"
									min={selectedValue == "Cruisebook" ? "50" : "10"}
									required
									onKeyDown={(evt) =>
										["e", "E", "+", "-"].includes(evt.key) &&
										evt.preventDefault()
									}
								></input>
							</div>
							<div className="combo">
								<label htmlFor="numpages">
									{selectedValue === "Cruisebook" ? (
										"Approximate Number of Pages"
									) : (
										<>
											Certificate Style{" "}
											<Link
												to="/certificates"
												target="_blank"
												rel="noopener noreferrer"
												title="View samples in a new tab"
											>
												(view samples)
											</Link>
										</>
									)}
								</label>

								{selectedValue == "Cruisebook" ? (
									<input
										type="number"
										id="numpages"
										name="Number of Pages"
										placeholder="Enter number of pages (minimum: 48)"
										min="48"
										required
										onKeyDown={(evt) =>
											["e", "E", "+", "-"].includes(evt.key) &&
											evt.preventDefault()
										}
									></input>
								) : (
									<select id="numpages" name="Certificate Style" required>
										<option
											selected="selected"
											value=""
											disabled="disabled"
											// hidden="hidden"
										>
											Select from dropdown
										</option>
										<option value="Bluenose">Bluenose</option>
										<option value="Bab-al-Mandeb">Bab-al-Mandeb</option>
										<option value="Order of the Rock">Order of the Rock</option>
										<option value="Shellback">Shellback</option>

										<option value="Suez Transit ">Suez Transit</option>

										<option value="Other">Other</option>
									</select>
								)}
							</div>
						</div>

						<div className="combo">
							<label htmlFor="base">Home Port or Base Location</label>
							<input
								type="text"
								id="base"
								name="Home Port or Base Location"
								placeholder={"Enter your home port/base"}
								spellCheck="false"
								required
							></input>
						</div>

						<div className="combo">
							<label htmlFor="message">Questions or Comments</label>
							<textarea
								id="message"
								name="Message"
								placeholder={"Enter your message"}
							></textarea>
						</div>

						<button type="submit">{result}</button>
					</>
				)}
			</form>
		</>
	);
};

export default QuoteForm;

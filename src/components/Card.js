import React from "react";
import { useNavigate } from "react-router-dom";

import "../global.css";
import "./Card.css";

const Card = ({ title, description, buttonText, buttonRedirect, height }) => {
	const navigate = useNavigate(); // Must call useNavigate at the top level

	const handleClick = () => {
		if (buttonRedirect.startsWith("http")) {
			window.location.href = buttonRedirect;
		} else {
			navigate(buttonRedirect);
		}
	};

	return (
		<div className="card" style={{ height: height || "15rem" }}>
			<h2>{title}</h2>
			<p>{description}</p>
			<button className="cardButton" onClick={handleClick}>
				{buttonText}
			</button>
		</div>
	);
};

export default Card;

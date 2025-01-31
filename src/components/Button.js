import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../global.css";
import "./Button.css";

const Button = ({ buttonText, style, isInverted, path }) => {
	/* We pass in style so we can use custom inline positioning relative to the button's parent*/

	const buttonClass = isInverted ? "button inverted" : "button";
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(path);
	};

	return (
		<button
			className={buttonClass}
			style={style}
			path={path}
			onClick={handleClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;

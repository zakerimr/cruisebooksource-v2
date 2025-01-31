import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

import "../global.css";
import "./Hero.css";

import heroImage from "../assets/cvn-hero.jpg";

const Hero = ({ header, description }) => {
	const navigate = useNavigate(); // Must call useNavigate at the top level

	const handleClick = () => {
		navigate(buttonRedirect);
	};

	return (
		<div
			className="hero"
			style={{
				backgroundImage: `linear-gradient(rgba(15, 23, 40, 0.5), rgba(15, 23, 40, 0.5)), url(${heroImage})`,
			}}
		>
			<h1 className="heroHeader">{header}</h1>
			<p className="heroDescription">{description}</p>

			<div className="doubleContainer heroDouble">
				<Button buttonText="See Products" path="/products" />
				<Button buttonText="See Services" isInverted="true" path="/services" />
			</div>
		</div>
	);
};

export default Hero;

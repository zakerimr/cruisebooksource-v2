import React from "react";
import "./Slider.css";
import leftArrow from "../assets/btn-back.png";
import rightArrow from "../assets/btn-fwd.png";

const BtnSlider = ({ direction, moveSlide }) => {
	return (
		<button
			onClick={moveSlide}
			className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
		>
			<img src={direction === "next" ? rightArrow : leftArrow}></img>
		</button>
	);
};

export default BtnSlider;

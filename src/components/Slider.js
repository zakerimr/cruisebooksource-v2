import React, { useState, useEffect } from "react";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import "./Slider.css";

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(1);
	const [touchStart, setTouchStart] = useState(null); // Stores initial touch position
	const [touchEnd, setTouchEnd] = useState(null); // Stores final touch position

	const nextSlide = () => {
		if (slideIndex !== dataSlider.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === dataSlider.length) {
			setSlideIndex(1);
		}
	};

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(dataSlider.length);
		}
	};

	const moveDot = (index) => {
		setSlideIndex(index);
	};

	// Swipe detection handlers
	const handleTouchStart = (e) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const minSwipeDistance = 50; // Minimum swipe distance in pixels

		if (distance > minSwipeDistance) {
			nextSlide(); // Swipe left
		} else if (distance < -minSwipeDistance) {
			prevSlide(); // Swipe right
		}

		setTouchStart(null);
		setTouchEnd(null);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 7200);
		return () => clearInterval(interval);
	});

	return (
		<div
			className="container-slider"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{dataSlider.map((obj, index) => {
				return (
					<div
						key={obj.id}
						className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
					>
						<h2>{obj.title}</h2>
						<h4>{obj.subTitle}</h4>
						<p>{obj.paragraph}</p>
					</div>
				);
			})}
			<BtnSlider moveSlide={nextSlide} direction="next" />
			<BtnSlider moveSlide={prevSlide} direction="prev" />

			<div className="container-dots">
				{Array.from({ length: dataSlider.length }).map((item, index) => (
					<div
						key={index}
						onClick={() => moveDot(index + 1)}
						className={slideIndex === index + 1 ? "dot active" : "dot"}
					></div>
				))}
			</div>
		</div>
	);
};

export default Slider;

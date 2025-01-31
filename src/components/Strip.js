import React, { useEffect } from "react";
import "./Strip.css";

const Strip = ({ list }) => {
	useEffect(() => {
		const scrollers = document.querySelectorAll(".scroller");

		const addAnimation = () => {
			scrollers.forEach((scroller) => {
				scroller.setAttribute("data-animated", true);

				const scrollerInner = scroller.querySelector(".scroller__inner");
				const scrollerContent = Array.from(scrollerInner.children);

				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true);
					duplicatedItem.setAttribute("aria-hidden", true);
					scrollerInner.appendChild(duplicatedItem);
				});
			});
		};

		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}
	});

	return (
		<>
			<div className="scroller" data-direction="right">
				<div className="scroller__inner">
					{list.map((image, index) => (
						<img key={index} src={image.default}></img>
					))}
				</div>
			</div>
		</>
	);
};

export default Strip;

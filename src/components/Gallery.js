import React, { useState, useEffect } from "react";
import "./Gallery.css";

import * as certs from "../assets/index.js";

const Gallery = () => {
	const [lightbox, setLightbox] = useState({
		open: false,
		src: "",
		caption: "",
	});

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Check screen width on mount and resize
		const handleResize = () => {
			setIsMobile(window.innerWidth < 480);
		};
		handleResize(); // Run on component mount
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleClick = (src, caption) => {
		if (!isMobile) {
			setLightbox({ open: true, src, caption });
		}
	};

	const closeLightbox = () => {
		setLightbox({ open: false, src: "", caption: "" });
	};

	return (
		<div className="galleryContaner">
			<h2>Bluenose</h2>
			<hr></hr>

			<div className="row">
				<span onClick={() => handleClick(certs.nose_t, "Bluenose Traditional")}>
					<img src={certs.nose_t} alt="Bluenose Traditional" />
					<div className="overlay">
						<p>Bluenose Traditional</p>
					</div>
				</span>
				<span
					onClick={() => handleClick(certs.nose_c, "Bluenose Contemporary")}
				>
					<img src={certs.nose_c}></img>
					<div className="overlay">
						<p>Bluenose Contemporary</p>
					</div>
				</span>
				<span
					onClick={() => handleClick(certs.nose_v2, "Bluenose Contemporary V2")}
				>
					<img src={certs.nose_v2}></img>
					<div className="overlay">
						<p>Bluenose Contemporary V2</p>
					</div>
				</span>
			</div>

			<h2>Bab-al-Mandeb</h2>
			<hr></hr>
			<div className="row">
				<span onClick={() => handleClick(certs.bam_t, "BAM Traditional")}>
					<img src={certs.bam_t}></img>
					<div className="overlay">
						<p>BAM Traditional</p>
					</div>
				</span>
				<span onClick={() => handleClick(certs.bam_c, "BAM Contemporary")}>
					<img src={certs.bam_c}></img>
					<div className="overlay">
						<p>BAM Contemporary</p>
					</div>
				</span>
			</div>

			<h2>Order of the Rock</h2>
			<hr></hr>
			<div className="row">
				<span
					onClick={() =>
						handleClick(certs.rock_t, "Order of the Rock Traditional")
					}
				>
					<img src={certs.rock_t}></img>
					<div className="overlay">
						<p>Order of the Rock Traditional</p>
					</div>
				</span>
				<span
					onClick={() =>
						handleClick(certs.rock_c, "Order of the Rock Contemporary")
					}
				>
					<img src={certs.rock_c}></img>
					<div className="overlay">
						<p>Order of the Rock Contemporary</p>
					</div>
				</span>
			</div>

			<h2>Shellback</h2>
			<hr></hr>
			<div className="row">
				<span
					onClick={() => handleClick(certs.shell_t, "Shellback Traditional")}
				>
					<img src={certs.shell_t}></img>
					<div className="overlay">
						<p>Shellback Traditional</p>
					</div>
				</span>
				<span
					onClick={() => handleClick(certs.shell_c, "Shellback Contemporary")}
				>
					<img src={certs.shell_c}></img>
					<div className="overlay">
						<p>Shellback Contemporary</p>
					</div>
				</span>
				<span onClick={() => handleClick(certs.shell_e, "Emerald Shellback")}>
					<img src={certs.shell_e}></img>
					<div className="overlay">
						<p>Emerald Shellback</p>
					</div>
				</span>
				<span onClick={() => handleClick(certs.shell_g, "Golden Shellback")}>
					<img src={certs.shell_g}></img>
					<div className="overlay">
						<p>Golden Shellback</p>
					</div>
				</span>
			</div>

			<h2>Suez Transit</h2>
			<hr></hr>
			<div className="row">
				<span
					onClick={() => handleClick(certs.suez_t, "Suez Transit Traditional")}
				>
					<img src={certs.suez_t}></img>
					<div className="overlay">
						<p>Suez Transit Traditional</p>
					</div>
				</span>
				<span
					onClick={() => handleClick(certs.suez_c, "Suez Transit Contemporary")}
				>
					<img src={certs.suez_c}></img>
					<div className="overlay">
						<p>Suez Transit Contemporary</p>
					</div>
				</span>
			</div>
			{lightbox.open && (
				<div className="lightbox" onClick={closeLightbox}>
					<div
						className="lightbox-content"
						onClick={(e) => e.stopPropagation()}
					>
						<img src={lightbox.src} alt={lightbox.caption} />
						<p>{lightbox.caption}</p>
						<button className="close-btn" onClick={closeLightbox}>
							x
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Gallery;

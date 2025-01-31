import React, { useState, useEffect } from "react";
import "./Gallery.css";

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
				<span
					onClick={() =>
						handleClick(
							"/certs/bluenose/Traditional_Bluenose_Sample copy.jpg",
							"Bluenose Traditional"
						)
					}
				>
					<img
						src="/certs/bluenose/Traditional_Bluenose_Sample copy.jpg"
						alt="Bluenose Traditional"
					/>
					<div className="overlay">
						<p>Bluenose Traditional</p>
					</div>
				</span>
				<span
					onClick={() =>
						handleClick(
							"/certs/bluenose/Contemporary_Bluenose_Sample.jpg",
							"Bluenose Contemporary"
						)
					}
				>
					<img src="/certs/bluenose/Contemporary_Bluenose_Sample.jpg"></img>
					<div className="overlay">
						<p>Bluenose Contemporary</p>
					</div>
				</span>
				<span
					onClick={() =>
						handleClick(
							"/certs/bluenose/Bluenose_V2.jpg",
							"Bluenose Contemporary V2"
						)
					}
				>
					<img src="/certs/bluenose/Bluenose_V2.jpg"></img>
					<div className="overlay">
						<p>Bluenose Contemporary V2</p>
					</div>
				</span>
			</div>

			<h2>Bab-al-Mandeb</h2>
			<hr></hr>
			<div className="row">
				<span
					onClick={() =>
						handleClick("/certs/bam/BAM_Traditional.jpg", "BAM Traditional")
					}
				>
					<img src="/certs/bam/BAM_Traditional.jpg"></img>
					<div className="overlay">
						<p>BAM Traditional</p>
					</div>
				</span>
				<span
					onClick={() =>
						handleClick("/certs/bam/BAM_Contemporary.jpg", "BAM Contemporary")
					}
				>
					<img src="/certs/bam/BAM_Contemporary.jpg"></img>
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
						handleClick(
							"/certs/rock/Rock Traditional Sample.jpg",
							"Order of the Rock Traditional"
						)
					}
				>
					<img src="/certs/rock/Rock Traditional Sample.jpg"></img>
					<div className="overlay">
						<p>Order of the Rock Traditional</p>
					</div>
				</span>
				<span
					onClick={() =>
						handleClick(
							"/certs/rock/Contemporary Order of Rock Sample.jpg",
							"Order of the Rock Contemporary"
						)
					}
				>
					<img src="/certs/rock/Contemporary Order of Rock Sample.jpg"></img>
					<div className="overlay">
						<p>Order of the Rock Contemporary</p>
					</div>
				</span>
			</div>

			<h2>Shellback</h2>
			<hr></hr>
			<div className="row">
				<span
					onClick={() =>
						handleClick(
							"/certs/shellback/Shellback_Traditional.jpg",
							"Shellback Traditional"
						)
					}
				>
					<img src="/certs/shellback/Shellback_Traditional.jpg"></img>
					<div className="overlay">
						<p>Shellback Traditional</p>
					</div>
				</span>
				<span
					onClick={() =>
						handleClick(
							"/certs/shellback/Shellback_Contemporary.jpg",
							"Shellback Contemporary"
						)
					}
				>
					<img src="/certs/shellback/Shellback_Contemporary.jpg"></img>
					<div className="overlay">
						<p>Shellback Contemporary</p>
					</div>
				</span>
				<span
					onClick={() =>
						handleClick(
							"/certs/shellback/Emerald Shellback_Sample.jpg",
							"Emerald Shellback"
						)
					}
				>
					<img src="/certs/shellback/Emerald Shellback_Sample.jpg"></img>
					<div className="overlay">
						<p>Emerald Shellback</p>
					</div>
				</span>
				<span
					onClick={() =>
						handleClick(
							"/certs/shellback/GoldenShellback_Traditonal.jpg",
							"Golden Shellback"
						)
					}
				>
					<img src="/certs/shellback/GoldenShellback_Traditonal.jpg"></img>
					<div className="overlay">
						<p>Golden Shellback</p>
					</div>
				</span>
			</div>

			<h2>Suez Transit</h2>
			<hr></hr>
			<div className="row">
				<span
					onClick={() =>
						handleClick(
							"/certs/suez/Suez_TraditionalV2.jpg",
							"Suez Transit Traditional"
						)
					}
				>
					<img src="/certs/suez/Suez_TraditionalV2.jpg"></img>
					<div className="overlay">
						<p>Suez Transit Traditional</p>
					</div>
				</span>
				<span
					onClick={() =>
						handleClick(
							"/certs/suez/Suez_Contemporary.jpg",
							"Suez Transit Contemporary"
						)
					}
				>
					<img src="/certs/suez/Suez_Contemporary.jpg"></img>
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

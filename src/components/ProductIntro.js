import React from "react";
import "./ProductIntro.css";
import sixCovers from "../assets/six-covers.png";
import threeCerts from "../assets/three-certs.png";
import paoDV from "../assets/folders.png";
import Button from "../components/Button";

const ProductIntro = () => {
	return (
		<>
			<div className="productContainer">
				<div className="infoContainer">
					<img className="productImg" src={sixCovers}></img>
					<div className="stack">
						<h2>Cruisebooks</h2>
						<p className="productWriteup">
							For over 30 years, we’ve been helping sailors preserve their
							memories with our professionally crafted cruisebooks. Each book is
							a tribute your ship's deployment, featuring operational photos,
							mission highlights, and crew portrait rosters. Whether you're
							looking for a keepsake of your own journey or searching for a
							cruisebook from years past, we’re proud to be the trusted source
							for preserving naval history.
						</p>
						<Button
							buttonText="View Samples"
							style={{ marginTop: "auto", minWidth: "200px" }}
							path="/cruisebooks"
						/>
					</div>
				</div>
			</div>
			<div className="productContainer">
				<div className="infoContainer">
					<img className="productImg" src={threeCerts}></img>
					<div className="stack">
						<h2>Achievement Certificates</h2>
						<p className="productWriteup">
							Bluewater Publishing offers a complete line of achievement
							certificate designs — or we can create a custom design for you!
							Available certificates include: Shellback, Safari through the
							Suez, Order of the Rock, Bluenose, Persian Excursion, Straits of
							Hormuz, Order of the Ditch, and many more! View our samples to see
							more information about our most popular certificates.
						</p>
						<Button
							buttonText="View Samples"
							style={{ marginTop: "auto", minWidth: "200px" }}
							path="/certificates"
						/>
					</div>
				</div>
			</div>
			<div className="productContainer">
				<div className="infoContainer">
					<img className="productImg" src={paoDV}></img>
					<div className="stack centerstack">
						<h2>PAO/DV Items</h2>
						<p className="productWriteup">
							Bluewater Publishing offers an extensive line of custom Command
							Folders, Welcome Aboard Folders, Certificate and Award Holders,
							and Photo Folders. Contact us today for a quote for your Command's
							needs.
						</p>
						{/* <Button
							buttonText="View Samples"
							style={{ marginTop: "auto", minWidth: "200px" }}
							path="/pao-dv"
						/> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductIntro;

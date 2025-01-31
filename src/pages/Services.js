import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import sampleSailor from "../assets/sample-sailor.jpg";
import bookDesign from "../assets/bookdesign.png";
import marketing from "../assets/marketing.jpg";
import fulfillment from "../assets/order.jpg";

const Services = () => {
	return (
		<>
			<Navbar />
			<h1>Services</h1>

			<div className="productContainer">
				<div className="infoContainer">
					<img className="productImg noshadow" src={sampleSailor}></img>
					<div className="stack centerstack">
						<h2>Crew Portrait Photography</h2>
						<p className="productWriteup">
							Our photographers travel the world to create professional studio
							portraits of your crew members for no additional cost.
						</p>
					</div>
				</div>
			</div>
			<div className="productContainer">
				<div className="infoContainer">
					<img className="productImg" src={bookDesign}></img>
					<div className="stack centerstack">
						<h2>Design Services</h2>
						<p className="productWriteup">
							We'll do the work for you! Our on-staff professional designers
							will help build your book.
						</p>
					</div>
				</div>
			</div>
			<div className="productContainer">
				<div className="infoContainer">
					<img className="productImg" src={marketing}></img>
					<div className="stack centerstack">
						<h2>Marketing</h2>
						<p className="productWriteup">
							Bluewater provides order forms, sales trackers, email marketing,
							and an online listing to help your Command meet their sales goal.
						</p>
					</div>
				</div>
			</div>
			<div className="productContainer">
				<div className="infoContainer">
					<img className="productImg" src={fulfillment}></img>
					<div className="stack centerstack">
						<h2>Order Fulfillment</h2>
						<p className="productWriteup">
							We offer individual book mailing, cover customization, and full
							office support to ensure delivery of each and every book.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Services;

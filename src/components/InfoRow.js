import React from "react";
import "./InfoRow.css";

import officeHours from "../assets/officehours.svg";
import officeLocation from "../assets/officelocation.svg";
import phone from "../assets/phone.svg";

const InfoRow = () => {
	return (
		<div className="infoRow">
			<div className="infoStack">
				<img src={officeHours}></img>
				<h2>Office Hours</h2>
				<p>Mon - Fri 9:00AM - 4:00PM EST</p>
			</div>
			<div className="infoStack">
				<img src={officeLocation}></img>
				<h2>Office Location</h2>
				<p>7348 Main St, Gloucester, VA 23061</p>
			</div>
			<div className="infoStack">
				<img src={phone}></img>
				<h2>Phone</h2>
				<p>(800) 323-0578</p>
			</div>
		</div>
	);
};

export default InfoRow;

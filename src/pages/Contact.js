import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Button from "../components/Button";

import { Link } from "react-router-dom";

import InfoRow from "../components/InfoRow";
import PhotoForm from "../components/PhotoForm";

import "../global.css";

const Contact = () => {
	return (
		<>
			<Navbar />
			<h1>Contact</h1>

			<section>
				<p style={{ textAlign: "center", marginBottom: "1rem" }}>
					For questions about your cruisebook or portrait order, please contact
					us:
				</p>
				<PhotoForm />

				<InfoRow />
				{/* <Button buttonText={"Request a quote"} path="/request-a-quote" /> */}

				<p style={{ textAlign: "center" }}>
					Looking to produce a book for your command?{" "}
					<Link to="/request-a-quote">Request a quote.</Link>
				</p>
			</section>
			<Footer />
		</>
	);
};

export default Contact;

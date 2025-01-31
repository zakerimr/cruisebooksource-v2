import React from "react";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Certificates = () => {
	return (
		<>
			<Navbar />
			<h1>Achievement Certificates</h1>
			<section>
				<p style={{ textAlign: "center" }}>
					Looking to produce certificates for your command?{" "}
					<Link to="/request-a-quote">Request a quote.</Link>
				</p>
				<Gallery />
			</section>
			<Footer />
		</>
	);
};

export default Certificates;

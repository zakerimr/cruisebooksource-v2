import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";

const Quote = () => {
	return (
		<>
			<Navbar />
			<h1>Request a Quote</h1>

			<QuoteForm />

			<Footer />
		</>
	);
};

export default Quote;

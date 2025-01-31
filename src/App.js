import React from "react";

/* 
  - Renames BrowserRouter to Router
  - Route is used to define each individual route in the app
	- Routes is a wrapper for all Route components
	- Link is a component that creates a navigable link within the app. Replaces <a>
*/

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Slider from "./components/Slider";

import "./global.css";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero
				header="Your Cruisebook Source."
				description="Proud U.S. Navy & USMC partner for over 30 years"
				buttonText="Learn more"
			/>
			<section style={{ marginTop: "1.5rem" }}>
				<div className="doubleContainer">
					<Card
						title="Create & Publish"
						description="Get in touch with our design team to have a cruisebook published for your command."
						buttonText="Request a Quote"
						height="15rem"
						buttonRedirect="/request-a-quote"
					/>
					<Card
						title="Browse Existing"
						description="Looking for a previous cruisebook? Take a look at our extensive catalog."
						buttonText="Browse cruisebooks"
						height="15rem"
						buttonRedirect="https://www.buymycruisebook.com"
					/>
				</div>
			</section>

			<section>
				<h1>What Our Customers Say</h1>

				<Slider />
			</section>

			<Footer />
		</>
	);
};

export default App;

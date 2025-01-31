import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bookstack from "../assets/book-stack.png";

import "../global.css";
import "../components/About.css";

const About = () => {
	return (
		<>
			<Navbar />
			<h1>About</h1>

			<section className="aboutSection">
				<div className="doubleContainer">
					<img
						src={bookstack}
						style={{
							width: "33%",
							filter: "drop-shadow(5px 5px 10px #888)",
						}}
					></img>
					<div className="about-text">
						<p className="dropcap">
							The principals of Bluewater Publishing have been publishing
							cruisebooks, DV items, and Achievement Certificates for the US
							Navy and USMC for over 30 years. We are honored to continue to be
							a part of providing those who serve, and their families, a truly
							limited edition keepsake documenting their legacy of service to
							our country. Over the years, we have come to appreciate and
							realize that a cruisebook will be more important than ever as the
							years go by, and we work hard to make sure each and every Sailor
							or Marine has an opportunity to be included and receive a book. We
							even maintain a library of past cruisebooks and never hesitate to
							replace a lost or damaged cruisebook at no cost to the service
							member.
						</p>

						<p>
							We are committed to the innovative use of technology, team-based
							manufacturing and extraordinary customer care to bring your
							cruisebook to you on time and on budget. We provide a complete
							publishing experience designed to help you and your staff make the
							most of your memories. Ours is a comprehensive program that brings
							people, technology, and experience together.
						</p>

						<p>
							Our staff includes graphic artists producing thousands of unique
							page designs, photographers who travel the globe photographing
							crew portraits, and an office staff dedicated to ensuring your
							cruisebook publishing experience exceeds your expectations.
						</p>

						<p className="important-paragraph">
							We would be honored to work with you to produce a cruisebook the
							entire crew will be proud of!
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default About;

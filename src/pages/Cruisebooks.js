import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Strip from "../components/Strip";
import { Link } from "react-router-dom";

import * as samples from "../assets/index.js";

import "../global.css";
import "../components/Cruisebooks.css";

const covers = require.context("../../public/covers", false);
const endsheets = require.context("../../public/endsheets", false);

const Cruisebooks = () => {
	const coverList = covers.keys().map((image) => covers(image));
	const endsheetList = endsheets.keys().map((image) => endsheets(image));

	return (
		<>
			<Navbar />
			<h1>Cruisebooks</h1>
			<p style={{ textAlign: "center" }}>
				Looking to produce a cruisebook for your command?{" "}
				<Link to="/request-a-quote">Request a quote.</Link>
			</p>

			<section style={{ maxWidth: "1010px" }}>
				<Strip list={coverList} />

				<p style={{ lineHeight: 1.5 }}>
					<span className="highlight">COVERS</span>
					Bluewater Publishing has an extensive line of cover materials and
					applications, including leatherette with foil stamping, embossing,
					silk screening, and metal inlays along with four-color printed covers
					in both gloss and matte finishes with a variety of applications.
				</p>
			</section>

			<section style={{ maxWidth: "1010px" }}>
				{/* <Strip list={endsheetList} /> */}

				<div className="endsheetContainer" style={{}}>
					{endsheetList.map((image, index) => (
						<img
							key={index}
							src={image.default}
							className="endsheetImage"
						></img>
					))}
				</div>

				<p style={{ lineHeight: 1.5 }}>
					<span className="highlight">ENDSHEETS</span>
					Bluewater Publishing offers custom-designed printed endsheets and a
					full line of solid colors to complete the overall theme of your book.
				</p>
			</section>

			<section style={{ maxWidth: "1010px" }}>
				<h1>Sample Books</h1>
				<div className="sampleContainer">
					<div className="dub">
						<Link
							to="https://indd.adobe.com/view/638027f4-349e-45df-9b73-b23737d72369"
							className="quarter"
						>
							<img src={samples.sample1}></img>
							<p>USS Essex (LHD 2) 2018-2019 Deployment</p>
						</Link>
						<Link
							className="quarter"
							to="https://indd.adobe.com/view/751b963d-c573-48aa-aae3-71444fff5e47"
						>
							<img src={samples.sample2}></img>
							<p>USS Ashland (LSD 48) 2018-2019 Deployment</p>
						</Link>
					</div>
					<div className="dub">
						<Link
							className="quarter"
							to="https://indd.adobe.com/view/5cb23f71-22d7-4fd5-9a25-ae96b59df89e"
						>
							<img src={samples.sample3}></img>
							<p>USS Oak Hill (LSD 51) 2018 Deployment</p>
						</Link>
						<Link
							className="quarter"
							to="https://indd.adobe.com/view/bf9fc042-d177-46fb-9a5d-58efe00e2c91"
						>
							<img src={samples.sample4}></img>
							<p>Combat Logistics Battalion 11 2020-2021 Deployment</p>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Cruisebooks;

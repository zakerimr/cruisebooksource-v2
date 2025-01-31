/*
 This will be the entry JS for our app
*/

import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./src/App.js";
import About from "./src/pages/About.js";
import Contact from "./src/pages/Contact.js";
import Products from "./src/pages/Products.js";
import Quote from "./src/pages/Quote.js";
import Services from "./src/pages/Services.js";

import Cruisebooks from "./src/pages/Cruisebooks.js";
import Certificates from "./src/pages/Certificates.js";
import PAODV from "./src/pages/PAODV.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/products" element={<Products />} />
			<Route path="/request-a-quote" element={<Quote />} />
			<Route path="/services" element={<Services />} />

			<Route path="/cruisebooks" element={<Cruisebooks />} />
			<Route path="/certificates" element={<Certificates />} />
			<Route path="/pao-dv" element={<PAODV />} />
		</Routes>
	</Router>
);

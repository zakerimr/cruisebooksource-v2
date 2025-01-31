import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../global.css";
import "./Navbar.css";

import logo from "../assets/BWP_CBS.svg";

/*
  Using the NavLink component (rather than the Link component) allows us to highlight the navigation link of the page that we're currently on
*/

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav>
			<Link to="/">
				<img src={logo} alt="Cruisebook Source" className="navLogo"></img>
			</Link>

			{/* <img src={logo} alt="Cruisebook Source" className="navLogo"></img> */}
			<div
				className="menu"
				onClick={() => {
					setMenuOpen(!menuOpen); /* Hamburger menu toggle */
				}}
			>
				{/* Hamburger menu */}
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul className={menuOpen ? "open" : ""}>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
				<li>
					<NavLink to="/products">Products</NavLink>
				</li>
				<li>
					<NavLink to="/services">Services</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

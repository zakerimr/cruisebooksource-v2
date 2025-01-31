import React from "react";

import "../global.css";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="doubleContainer-footer">
				<p className="copyright">©2024 Bluewater Publishing</p>

				<ul>
					<li>Bluewater Publishing</li>
					<li>7348 Main Street</li>
					<li>Gloucester, VA 23061</li>
					<li>(800) 323-0578</li>
					<li>
						<a href="mailto:support@cruisebooksource.com">
							support@cruisebooksource.com
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;

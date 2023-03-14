import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<Link to="/" className="navButton">
				Home
			</Link>
			<Link to="/reviews" className="navButton">
				Reviews
			</Link>
		</nav>
	);
};

export default Nav;

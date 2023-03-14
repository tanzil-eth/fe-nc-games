import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<Link to="/" className="navButton">
				Home
			</Link>
			<Link to="/reviews" className="navButton">
				Reviews
			</Link>
		</div>
	);
};

export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";

const NavHeader = () => {
	return (
		<nav className="navigation">
			<NavLink
				to="/"
				className={(navData) =>
					`navbar__link ${navData.isActive ? "navbar_link--active" : ""}`
				}
			>
				Accueil
			</NavLink>
			<NavLink
				to="/about"
				className={(navData) =>
					`navbar__link ${navData.isActive ? "navbar_link--active" : ""}`
				}
			>
				A propos
			</NavLink>
		</nav>
	);
};

export default NavHeader;
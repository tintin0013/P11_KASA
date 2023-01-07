import React from "react";
import Logo from "./Logo";
import NavHeader from "./NavHeader";
import "../styles/components/header.css"


const Header = () => {
	return (
		<div className="header">
			<Logo />
			<NavHeader />
		</div>
	);
};

export default Header;
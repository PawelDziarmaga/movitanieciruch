import React from "react";
import "./Logo.css";
import logo from "../../../Image/LOGO-NAV.png";

function Logo() {
	return (
		<span className='nav__element nav__logo-container'>
			<img className='nav__logo' src={logo} alt='logo'></img>
		</span>
	);
}

export default Logo;

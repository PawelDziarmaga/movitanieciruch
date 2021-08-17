import React from "react";
import "./Logo.css";
import logo from "../../../Image/LOGO-NAV.png";
import { NavLink } from "react-router-dom";

function Logo() {
	return (
		<NavLink to='/' exact>
			<span className='nav__element nav__logo-container'>
				<img className='nav__logo' src={logo} alt='logo'></img>
			</span>
		</NavLink>
	);
}

export default Logo;

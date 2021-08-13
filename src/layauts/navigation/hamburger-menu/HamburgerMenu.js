import React from "react";
import "./HamburgerMenu.css";

function HamburgerMenu(props) {
	return (
		<div onClick={props.click} className='nav__hamburger-container'>
			<span className='nav__hamburger nav__element nav__list-item'></span>
		</div>
	);
}

export default HamburgerMenu;

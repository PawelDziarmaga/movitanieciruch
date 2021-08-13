import React, { useEffect, useState } from "react";
import "./Navigation.css";
import HamburgerMenu from "./hamburger-menu/HamburgerMenu";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import MenuMobile from "./MenuMobile/MenuMobile";

function App() {
	const [mobileMenu, setMobileMenu] = useState("");

	const [henuHamburger, setMenuHamburger] = useState("");

	useEffect(() => {
		setMobileMenu(document.querySelector(".nav-container").classList);
		setMenuHamburger(
			document.querySelector(".nav__hamburger-container").classList
		);
	}, []);

	const handleHamburgerMenu = () => {
		setMobileMenu(
			document.querySelector(".nav-container").classList.toggle("visible")
		);
		setMenuHamburger(
			document
				.querySelector(".nav__hamburger-container")
				.classList.toggle("active")
		);
	};

	return (
		<div className='nav-container visible'>
			<nav className='nav'>
				<Logo />
				<Menu />
				<HamburgerMenu click={handleHamburgerMenu} />
			</nav>
			<MenuMobile />
		</div>
	);
}

export default App;

import { useEffect } from "react";
import HamburgerMenu from "./hamburger-menu/HamburgerMenu";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import MenuMobile from "./MenuMobile/MenuMobile";

function App() {
	let possition = 0;
	let nav = document.getElementsByClassName("nav");
	let mobileMenu;
	let menuHamburger = document.querySelector(".nav__hamburger-container");

	const navCameleon = function (event) {
		debugger;
		menuHamburger = document.querySelector(".nav__hamburger-container");
		nav = document.getElementsByClassName("nav");

		if (menuHamburger.classList[1] === "active") {
			nav[0].classList.remove("opacity-nav");
		} else {
			if (possition < 1) {
				nav[0].classList.add("opacity-nav");
			} else if (possition < 5) {
				nav[0].classList.remove("opacity-nav");
			} else if (possition > Math.floor(window.scrollY / 100)) {
				nav[0].classList.remove("visible-nav");
				nav[0].classList.remove("opacity-nav");
			} else if (possition < Math.floor(window.scrollY / 100)) {
				nav[0].classList.add("visible-nav");
				nav[0].classList.remove("opacity-nav");
			}
			possition = Math.floor(window.scrollY / 100);
		}
	};
	useEffect(() => {
		window.onscroll = navCameleon;
		navCameleon();
	});
	const handleHamburgerMenu = () => {
		nav = document.getElementsByClassName("nav");
		if (nav[0].classList[1] === "opacity-nav") {
			nav[0].classList.remove("opacity-nav");
		} else if (nav[0].classList[1] !== "opacity-nav" && possition < 1) {
			nav[0].classList.add("opacity-nav");
		}

		mobileMenu = document
			.querySelector(".nav-container")
			.classList.toggle("visible");
		menuHamburger = document
			.querySelector(".nav__hamburger-container")
			.classList.toggle("active");

		navCameleon();
	};

	const handleHamburgerMenuClick = () => {
		mobileMenu = document
			.querySelector(".nav-container")
			.classList.add("visible");
		menuHamburger = document
			.querySelector(".nav__hamburger-container")
			.classList.remove("active");

		window.scrollTo(0, 0);
	};

	return (
		<div className='nav-container visible'>
			<nav className='nav opacity-nav'>
				<Logo click={handleHamburgerMenuClick} />
				<Menu click={navCameleon} />
				<HamburgerMenu click={handleHamburgerMenu} />
			</nav>
			<MenuMobile click={handleHamburgerMenuClick} />
		</div>
	);
}

export default App;

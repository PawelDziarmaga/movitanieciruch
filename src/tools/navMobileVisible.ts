import { navScrollViev } from "./navScrollViev";

export const navMobileVisible = () => {
	let mobileMenu: Element =
		document.getElementsByClassName("nav-container")[0];

	let menuHamburger: Element =
		document.getElementsByClassName("nav__hamburger")[0];
	const possition: number = Math.floor(window.scrollY / 10);
	mobileMenu.classList.add("visible");

	menuHamburger.classList.remove("active");
	navScrollViev(possition);
};

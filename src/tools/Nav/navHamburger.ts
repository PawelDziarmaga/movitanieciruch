export const navHamburger = () => {
	let possition: number = Math.floor(window.scrollY / 100);

	let nav: Element = document.getElementsByClassName("nav")[0];
	let mobileMenu: Element =
		document.getElementsByClassName("nav-container")[0];
	let menuHamburger: Element =
		document.getElementsByClassName("nav__hamburger")[0];

	/*if (nav.classList[1] === "opacity-nav") {
		nav.classList.remove("opacity-nav");
	} else if (nav.classList[1] !== "opacity-nav" && possition < 1) {
		nav.classList.add("opacity-nav");
	}*/

	mobileMenu.classList.toggle("visible");

	menuHamburger.classList.toggle("active");
};

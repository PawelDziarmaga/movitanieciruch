export const navScrollViev = function (possition: number) {
	let nav: Element = document.getElementsByClassName("nav")[0];
	let menuHamburger: Element =
		document.getElementsByClassName("nav__hamburger")[0];

	if (possition === 0) {
		possition = Math.floor(window.scrollY / 10);
	}

	if (menuHamburger.classList[1] === "active") {
		nav.classList.remove("opacity-nav");
	} else {
		if (possition < 5) {
			nav.classList.add("opacity-nav");
			nav.classList.remove("visible-nav");
		} else {
			/*nav.classList.add("visible-nav");*/
			if (possition > 15) {
				if (possition > Math.floor(window.scrollY / 10)) {
					nav.classList.remove("visible-nav");
					nav.classList.remove("opacity-nav");
				} else if (possition < Math.floor(window.scrollY / 10)) {
					nav.classList.add("visible-nav");
					nav.classList.remove("opacity-nav");
				} else {
					nav.classList.remove("opacity-nav");
				}
			}
		}
	}
};

/*
if (menuHamburger.classList[1] === "active") {
	nav.classList.remove("opacity-nav");
} else {
	console.log(possition + "-" + Math.floor(window.scrollY / 10));
	if (possition < 10) {
		nav.classList.add("opacity-nav");
	} else if (possition > 15) {
		nav.classList.remove("opacity-nav");
		nav.classList.add("visible-nav");
		if (possition > Math.floor(window.scrollY / 10)) {
			nav.classList.remove("visible-nav");
			nav.classList.remove("opacity-nav");
		} else if (possition < Math.floor(window.scrollY / 10)) {
			nav.classList.add("visible-nav");
			nav.classList.remove("opacity-nav");
		}
	}
}*/

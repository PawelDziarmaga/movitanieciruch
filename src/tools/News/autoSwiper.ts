export const autoSwiper = function () {
	/********************* FIND ALL BUTTONS ************/
	const btms: HTMLCollectionOf<Element> = document.getElementsByClassName(
		"news__navigation-btn"
	);
	/********************* FIND ALL SLIDES ************/
	const slides: HTMLCollectionOf<Element> =
		document.getElementsByClassName("news__slide");

	/* DEFINE EMPTY ARRAY FOR SERCHING ACTIVE BUTTON ***/
	let classes: any[] = [];

	/* FIND BUTTON WIDTH CLASS === active ***/
	if (btms.length > 0) {
		for (let i = 0; i < btms.length; i++) {
			classes.push(btms[i].classList[2]);
		}
		/* clases return ['active', undefined, undefined]*/

		let x = classes.findIndex((clas) => clas === "active");
		/* x return index of active element*/

		/* return active clases from all elements*/
		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active");
			btms[i].classList.remove("active");
		}

		if (x >= btms.length - 1) {
			x = 0;
		} else {
			x++;
		}

		slides[x].classList.add("active");
		btms[x].classList.add("active");
	}
};

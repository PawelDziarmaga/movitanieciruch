export const autoNav = function (move: string, interval: number) {
	clearInterval(interval);
	interval = setInterval(autoNav, 10000);

	const btms: HTMLCollectionOf<Element> = document.getElementsByClassName(
		"news__navigation-btn"
	);
	const slides: HTMLCollectionOf<Element> =
		document.getElementsByClassName("news__slide");
	let classes: any[] = [];

	if (btms.length > 0) {
		for (let i = 0; i < btms.length; i++) {
			classes.push(btms[i].classList[2]);
		}

		let x = classes.findIndex((clas) => clas === "active");
		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active");
			btms[i].classList.remove("active");
		}

		if (move === "right") {
			if (x < 0) {
				x = 0;
			} else if (x === 0) {
				x = btms.length - 1;
			} else {
				x--;
			}
		} else {
			if (x < 0) {
				x = 0;
			} else if (x >= btms.length - 1) {
				x = 0;
			} else {
				x++;
			}
		}
		if (move) {
			clearInterval(interval);
			interval = setInterval(autoNav, 10000);
		}

		slides[x].classList.add("active");
		btms[x].classList.add("active");
	}
};

export const manualClick = function (chosenElementClass: string) {
	/*const chosenElementClass = event.target.classList[1];*/

	const slides = document.getElementsByClassName("news__slide");
	const btms = document.getElementsByClassName("news__navigation-btn");

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
		btms[i].classList.remove("active");
	}

	const chosenElement = document.getElementsByClassName(chosenElementClass);
	chosenElement[0].classList.add("active");
	chosenElement[1].classList.add("active");
};

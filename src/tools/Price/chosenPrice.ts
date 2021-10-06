export const chosenPrice = function (chosenElementClass: string) {
	document
		.getElementsByClassName(chosenElementClass)[0]
		.classList.toggle("prices-active");
};

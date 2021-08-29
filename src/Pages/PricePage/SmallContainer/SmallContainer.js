import PriceElement from "../PriceElement/PriceElement";

import oneOfFour from "../../../Image/Price/loading-process1-4.png";
import twoOfFour from "../../../Image/Price/loading-process2-4.png";
import threeOfFour from "../../../Image/Price/loading-process3-4.png";
import fourOfFour from "../../../Image/Price/loading-process4-4.png";

import arrow from "../../../Image/Price/arrow-down.png";
import { useState } from "react";

function SmallContainer({
	classElement,
	name,
	priceOneOfFour,
	priceTwoOfFour,
	priceThreeOfFour,
	priceFourOfFour,
}) {
	const [stan, setStan] = useState("");

	const handlerClick = ({ target }) => {
		const chosenElementClass = target.classList[0];

		const allElements = document.getElementsByClassName(
			"price__small-container"
		);
		for (let i = 0; i < allElements.length; i++) {
			allElements[i].classList.remove("prices-active");
		}
		console.log(stan);
		if (stan !== chosenElementClass) {
			const chosenElement =
				document.getElementsByClassName(chosenElementClass);
			chosenElement[0].classList.add("prices-active");
			setStan(chosenElementClass);
		} else {
			setStan("");
		}
	};

	return (
		<div className={`${classElement} price__small-container`}>
			<div
				onClick={handlerClick}
				className={`${classElement} price__small-container__name`}>
				<h2 className={`${classElement}`}>{name}</h2>
				<img
					className={`${classElement}`}
					src={arrow}
					alt='arrow'></img>
			</div>
			<div className='price__small-container__pirces'>
				<PriceElement
					price={priceOneOfFour}
					img={oneOfFour}
					name='One'
					enter='1'
				/>
				<PriceElement
					price={priceTwoOfFour}
					img={twoOfFour}
					name='Four'
					enter='4'
				/>
				<PriceElement
					price={priceThreeOfFour}
					img={threeOfFour}
					name='Eight'
					enter='8'
				/>
				<PriceElement
					price={priceFourOfFour}
					img={fourOfFour}
					name='All in'
					enter='-'
				/>
			</div>
		</div>
	);
}

export default SmallContainer;

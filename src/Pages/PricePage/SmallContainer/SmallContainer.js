import PriceElement from "../PriceElement/PriceElement";

import oneOfFour from "../../../Image/Price/loading-process1-4.png";
import twoOfFour from "../../../Image/Price/loading-process2-4.png";
import threeOfFour from "../../../Image/Price/loading-process3-4.png";
import fourOfFour from "../../../Image/Price/loading-process4-4.png";

import { chosenPrice } from "../../../tools/Price/chosenPrice";

function SmallContainer({
	classElement,
	name,
	priceOneOfFour,
	priceTwoOfFour,
	priceThreeOfFour,
	priceFourOfFour,
}) {
	const PriceElementsData = [
		[priceOneOfFour, oneOfFour, "One", 1],
		[priceTwoOfFour, twoOfFour, "Four", 4],
		[priceThreeOfFour, threeOfFour, "Eight", 8],
		[priceFourOfFour, fourOfFour, "All in", "-"],
	];

	const PriceElements = PriceElementsData.map((element) => (
		<PriceElement
			key={element[0]}
			price={element[0]}
			img={element[1]}
			name={element[2]}
			enter={element[3]}
		/>
	));

	return (
		<div className={`${classElement} price__small-container`}>
			<div
				onClick={(e) => {
					chosenPrice(e.target.classList[0]);
				}}
				className={`${classElement} price__small-container__name`}>
				<h2 className={`${classElement}`}>{name}</h2>
				<span className={`${classElement} arrow`}>»</span>
			</div>
			<div className='price__small-container__pirces'>
				{PriceElements}
			</div>
		</div>
	);
}

export default SmallContainer;
/*
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

*/

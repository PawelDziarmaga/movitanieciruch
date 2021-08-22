import "./SmallContainer.css";

import PriceElement from "../PriceElement/PriceElement";

import oneOfFour from "../../../../Image/Price/loading-process1-4.png";
import twoOfFour from "../../../../Image/Price/loading-process2-4.png";
import threeOfFour from "../../../../Image/Price/loading-process3-4.png";
import fourOfFour from "../../../../Image/Price/loading-process4-4.png";

import arrow from "../../../../Image/Price/arrow-down.png";

function SmallContainer({
	name,
	priceOneOfFour,
	priceTwoOfFour,
	priceThreeOfFour,
	priceFourOfFour,
}) {
	const handlerClick = ({ target }) => {};

	return (
		<div className='price__small-container'>
			<div
				onClick={handlerClick}
				className='price__small-container__name'>
				<h2>{name}</h2>
				<img src={arrow} alt='arrow'></img>
			</div>
			<div className='price__small-container__pirces'>
				<PriceElement
					price={priceOneOfFour}
					img={oneOfFour}
					name='Only One'
					enter='1'
				/>
				<PriceElement
					price={priceTwoOfFour}
					img={twoOfFour}
					name='Twins'
					enter='2'
				/>
				<PriceElement
					price={priceThreeOfFour}
					img={threeOfFour}
					name='Fantastic Four'
					enter='4'
				/>
				<PriceElement
					price={priceFourOfFour}
					img={fourOfFour}
					name='Hateful Eight'
					enter='8'
				/>
			</div>
		</div>
	);
}

export default SmallContainer;

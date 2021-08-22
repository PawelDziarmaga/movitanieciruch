import "./Price.css";

import SmallContainer from "./SmallContainer/SmallContainer";

function Price() {
	return (
		<div id='idPrice' className='price main-element'>
			<h1>Cennik</h1>
			<div className='price__big-container'>
				<SmallContainer
					classElement='price_one'
					name='Fitness, Taniec Solo'
					priceOneOfFour='80zł'
					priceTwoOfFour='150zł'
					priceThreeOfFour='280zł'
					priceFourOfFour='500zł'
				/>
				<SmallContainer
					classElement='price_two'
					name='Dzieci'
					priceOneOfFour='60zł'
					priceTwoOfFour='100zł'
					priceThreeOfFour='180zł'
					priceFourOfFour='300zł'
				/>
				<SmallContainer
					classElement='price_three'
					name='Pary Ślubne'
					priceOneOfFour='100zł'
					priceTwoOfFour='180zł'
					priceThreeOfFour='350zł'
					priceFourOfFour='600zł'
				/>
				<SmallContainer
					classElement='price_four'
					name='Inne'
					priceOneOfFour='100zł'
					priceTwoOfFour='180zł'
					priceThreeOfFour='350zł'
					priceFourOfFour='600zł'
				/>
			</div>
		</div>
	);
}

export default Price;

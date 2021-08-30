import SmallContainer from "./SmallContainer/SmallContainer";

function PricePage() {
	return (
		<div className='price-page'>
			<h1 className='price-page__title'>Cennik</h1>
			<div className='price__big-container'>
				<SmallContainer
					classElement='price_one'
					name='Fitness, Taniec Solo'
					priceOneOfFour='80'
					priceTwoOfFour='150'
					priceThreeOfFour='280'
					priceFourOfFour='500'
				/>
				<SmallContainer
					classElement='price_two'
					name='Dzieci'
					priceOneOfFour='60'
					priceTwoOfFour='100'
					priceThreeOfFour='180'
					priceFourOfFour='300'
				/>
				<SmallContainer
					classElement='price_three'
					name='Pary Ślubne'
					priceOneOfFour='100'
					priceTwoOfFour='180'
					priceThreeOfFour='350'
					priceFourOfFour='600'
				/>
				<SmallContainer
					classElement='price_four'
					name='Inne'
					priceOneOfFour='100'
					priceTwoOfFour='180'
					priceThreeOfFour='350'
					priceFourOfFour='600'
				/>
			</div>
		</div>
	);
}

export default PricePage;

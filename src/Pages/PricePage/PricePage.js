import SmallContainer from "./SmallContainer/SmallContainer";

function PricePage() {
	const SmallContainerData = [
		[
			"price_one prices-active",
			"Fitness, Taniec Solo",
			[80, 150, 280, 500],
		],
		["price_two", "Dzieci", [50, 130, 250, 400]],
		["price_three", "Pary Ślubne", [75, 160, 200, 600]],
		["price_four", "Inne", [80, 150, 280, 500]],
	];

	const SmallContainerElements = SmallContainerData.map((element) => (
		<SmallContainer
			key={element[0]}
			classElement={element[0]}
			name={element[1]}
			priceOneOfFour={element[2][0]}
			priceTwoOfFour={element[2][1]}
			priceThreeOfFour={element[2][2]}
			priceFourOfFour={element[2][3]}
		/>
	));

	return (
		<div className='price-page'>
			<div className='price__big-container'>{SmallContainerElements}</div>
		</div>
	);
}

export default PricePage;

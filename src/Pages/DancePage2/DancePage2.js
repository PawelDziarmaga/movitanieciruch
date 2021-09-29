import FitnessPageBox from "./DancePage2Box/DancePage2Box";

import FitnessPisture from "../../Image/SpecialOffer/party.jpg";

import DataFitness from "./DancePage2.json";

function FitnessPage() {
	window.scrollTo(0, 0);
	return (
		<div className='fitness-page'>
			<FitnessPageBox
				title='Fitness'
				img={FitnessPisture}
				txt={DataFitness}
			/>
		</div>
	);
}

export default FitnessPage;

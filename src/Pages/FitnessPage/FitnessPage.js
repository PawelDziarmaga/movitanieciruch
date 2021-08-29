import FitnessPageBox from "./FitnessPageBox/FitnessPageBox";

import FitnessPisture from "../../Image/Fitness/fitness.jpg";

import DataFitness from "./DataFitness.json";

function FitnessPage() {
	window.scrollTo(0, 0);
	return (
		<div className='fitness-page'>
			<h1 className='fitness-page__title'>Fitness</h1>
			<FitnessPageBox
				title='Fitness'
				img={FitnessPisture}
				txt={DataFitness}
			/>
		</div>
	);
}

export default FitnessPage;

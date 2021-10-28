import FitnessPageBox from "./FitnessPageBox/FitnessPageBox";

import FitnessPisture from "../../Image/Zajecia/Mini-518px-345px/Ruch.jpg";

import DataFitness from "./DataFitness.json";

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

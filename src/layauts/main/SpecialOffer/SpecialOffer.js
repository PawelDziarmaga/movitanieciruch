import "./SpecialOffer.css";

import SpecialOfferElements from "./SpecialOfferElements/SpecialOfferElements";

import kcal from "../../../Image/Fitness/kcal.png";
import idea from "../../../Image/Fitness/idea.png";
import muscles from "../../../Image/Fitness/muscles.png";

function SpecialOffer() {
	return (
		<div id='idSpecialOffer' className='SpecialOffer main-element'>
			<h1>Oferta specjalna</h1>

			<div className='SpecialOffer__col'>
				<div className='SpecialOffer__col1'>
					<SpecialOfferElements img={kcal} text='Wynajem Sali' />
					<SpecialOfferElements img={idea} text='Wieczór Panieński' />
					<SpecialOfferElements
						img={muscles}
						text='Organizacja imprez'
					/>
				</div>
			</div>
		</div>
	);
}

export default SpecialOffer;

import "./SpecialOffer.css";

import SpecialOfferElements from "./SpecialOfferElements/SpecialOfferElements";

import rent from "../../../Image/SpecialOffer/rent.png";

function SpecialOffer() {
	return (
		<div id='idSpecialOffer' className='SpecialOffer main-element'>
			<h1>Oferta specjalna</h1>

			<div className='SpecialOffer__col'>
				<div className='SpecialOffer__col1'>
					<SpecialOfferElements img={rent} text='Wynajem Sali' />
					<SpecialOfferElements img={rent} text='Wieczór Panieński' />
					<SpecialOfferElements
						img={rent}
						text='Organizacja imprez'
					/>
				</div>
			</div>
		</div>
	);
}

export default SpecialOffer;

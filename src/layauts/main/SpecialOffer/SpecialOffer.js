import { useHistory } from "react-router";

import SpecialOfferElements from "./SpecialOfferElements/SpecialOfferElements";
import BoxOne from "./BoxOne/BoxOne";

import rent from "../../../Image/SpecialOffer/rent.png";
import party from "../../../Image/SpecialOffer/party.jpg";
function SpecialOffer() {
	const history = useHistory();
	const handleButton = () => {
		const location = {
			pathname: "/Ofertaspecjalna",
		};
		window.scrollTo(0, 0);
		history.push(location);
	};
	return (
		<div id='idSpecialOffer' className='SpecialOffer main-element'>
			<h1 className='SpecialOffer__title'>Oferta specjalna</h1>
			<BoxOne click={handleButton} party={party} />
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
			<div className='SpecialOffer__more'>
				<p onClick={handleButton}>Dowiedz się więcej...</p>
			</div>
		</div>
	);
}

export default SpecialOffer;

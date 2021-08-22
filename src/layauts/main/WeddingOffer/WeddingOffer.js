import "./WeddingOffer.css";

import BoxOne from "./BoxOne/BoxOne";
import WeddingElements from "./WeddingElements/WeddingElements";

import slubna from "../../../Image/Dance/ParySlubne.jpg";
import paryOne from "../../../Image/OfertaSlubna/PierwszyTaniec.png";
import paryTwo from "../../../Image/OfertaSlubna/TaniecUzytkowy.png";

function WeddingOffer() {
	return (
		<div className='WeddingOffer main-element'>
			<h1>Oferta ślubna</h1>
			<BoxOne slubna={slubna} />
			<div className='WeddingOffer__boxTwo'>
				<WeddingElements img={paryOne} text='Pierwszy Taniec' />
				<WeddingElements img={paryTwo} text='Taniec użytkowy' />
			</div>
		</div>
	);
}

export default WeddingOffer;

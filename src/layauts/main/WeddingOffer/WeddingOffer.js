import BoxOne from "./BoxOne/BoxOne";
import WeddingElements from "./WeddingElements/WeddingElements";

import slubna from "../../../Image/Dance/ParySlubne.jpg";
import paryOne from "../../../Image/OfertaSlubna/PierwszyTaniec.png";
import paryTwo from "../../../Image/OfertaSlubna/TaniecUzytkowy.png";

function WeddingOffer() {
	const handleButton = () => {
		const element = document.querySelector(".WeddingOffer__more ul");

		element.classList.toggle("active");
	};

	return (
		<div id='idWeddingOffer' className='WeddingOffer main-element'>
			<h1 className='WeddingOffer__title'>Oferta ślubna</h1>
			<BoxOne slubna={slubna} />
			<div className='WeddingOffer__boxTwo'>
				<WeddingElements img={paryOne} text='Pierwszy Taniec' />
				<WeddingElements img={paryTwo} text='Taniec użytkowy' />
			</div>
			<div className='WeddingOffer__more'>
				<p onClick={handleButton}>Dowiedz się więcej...</p>
				<ul>
					<li>
						Zadzwoń pod numer: <span>258 147 369</span>
					</li>

					<li>
						Napisz na: <span>biuro@movietanieciruch.pl</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default WeddingOffer;
